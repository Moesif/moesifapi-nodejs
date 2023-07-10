var HttpContext = require("./HttpContext");
var HttpResponse = require("../Response/HttpResponse");
var https = require("https");
var axios = require("axios");
var axiosRetry = require("axios-retry");
var zlib = require("zlib");
var APIHelper = require("../../APIHelper");
var _configuration = require("../../configuration");

var keepAliveAgent = new https.Agent({
  keepAlive: true,
  maxSockets: 25
});

var alreadySetReTry = false;

var convertHttpRequest = function (req, callback) {
  //Convert to request's version of http request
  var options = {
    url: req.queryUrl,
    method: req.method,
    headers: req.headers,
    timeout: 10000,
    httpsAgent: keepAliveAgent,
    params: req.params
  };

  if (req.body) {
    zlib.gzip(req.body, function (err, buffer) {
      if (err) {
        options.data = req.body;
        callback(options);
      } else {
        options.headers["Content-Encoding"] = "gzip";
        options.data = buffer;
        callback(options);
      }
    });
  } else {
    callback(options);
  }
};

var convertHttpResponse = function (resp) {
  var response = new HttpResponse();
  if (resp) {
    // axios calls response data.
    response.body = resp.data;
    response.headers = resp.headers;
    response.statusCode = resp.statusCode || resp.status;
  }

  return response;
};

/**
 * Execute a given HttpRequest to get string response back
 * @param	{HttpRequest | HttpBodyRequest} request    The query string builder to replace the template parameters
 */
function executeRequest(req, callback) {
  convertHttpRequest(req, function (options) {
    var context = new HttpContext();
    context.request = req;

    axios(options)
      .then(function (res) {
        context.response = res;
        context.response.statusCode =
          context.response.statusCode || context.response.status;
        context.response.body = res.body || res.data;
        const convertedResponse = convertHttpResponse(res);
        callback(null, convertedResponse, context);
      })
      .catch(function (err) {
        if (err.response) {
          err.response.statusCode =
            err.response.statusCode || err.response.status;
          context.response = err.response;
          context.response.body = err.response.body || err.response.data;

          callback(err, convertHttpResponse(err.response), context);
        } else {
          callback(err, null, context);
        }
      });
  });
}

function executeRequestCombined(req, callback) {
  if (_configuration.retry && !alreadySetReTry) {
    axiosRetry(axios, {
      retries: _configuration.retry,
      retryDelay: axiosRetry.exponentialDelay
    });

    alreadySetReTry = true;
  }
  executeRequest(req, callback);
}

module.exports = executeRequestCombined;
