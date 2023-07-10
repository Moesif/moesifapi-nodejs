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
function executeRequestNew(req, callback) {
  convertHttpRequest(req, function (options) {
    var context = new HttpContext();
    context.request = req;

    axios(options)
      .then(function (res) {
        context.response = res;
        context.response.statusCode =
          context.response.statusCode || context.response.status;
        const convertedResponse = convertHttpResponse(res);
        callback(null, convertedResponse, context);
      })
      .catch(function (err) {
        if (err.response) {
          err.response.statusCode =
            err.response.statusCode || err.response.status;
          context.response = err.response;

          callback(err, convertHttpResponse(err.response), context);
        } else {
          callback(err, null, context);
        }
      });
  });
}

// /**
//  * Execute a given HttpRequest to get string response back
//  * @param	{HttpRequest | HttpBodyRequest} request    The query string builder to replace the template parameters
//  */
// function executeRequestWithRetry(req, retryMax, callback) {
//     //Convert abstracted request to request's http request
//     convertHttpRequest(req, function(options) {
//       var context = new HttpContext();
//       context.request = req;

//       var retryCount = 0;
//       //Make a temp callback
//       var internalCallback = function cb(error, res, body) {
//         if (error && retryCount < retryMax) {
//           retryCount = retryCount + 1;
//           console.log('error sending, retrying count: ' + retryCount);
//           options.headers["X-Moesif-Retry"] = retryCount;
//           // set next retry to 250ms later.
//           setTimeout(function () {
//             request(options, internalCallback);
//           }, 250);
//         } else {
//           var response = convertHttpResponse(res);
//           context.response = response;
//           callback(error, response, context);
//         }
//       };
//       //Make the request;
//       request(options, internalCallback);
//     });
// }

// /**
//  * Execute a given HttpRequest to get string response back
//  * @param	{HttpRequest | HttpBodyRequest} request    The query string builder to replace the template parameters
//  */
// function executeRequest(req, callback) {
//     //Convert abstracted request to request's http request
//     convertHttpRequest(req, function(options) {
//       var context = new HttpContext();
//       context.request = req;

//       //Make a temp callback
//       var internalCallback = function cb(error, res, body) {
//           var response = convertHttpResponse(res);
//           context.response = response;
//           callback(error, response, context);
//       };

//       //Make the request;
//       request(options, internalCallback);
//     });
// }

function executeRequestCombined(req, callback) {
  if (_configuration.retry && !alreadySetReTry) {
    axiosRetry(axios, {
      retries: _configuration.retry,
      retryDelay: axiosRetry.exponentialDelay
    });

    alreadySetReTry = true;
  }
  executeRequestNew(req, callback);
}

module.exports = executeRequestCombined;
