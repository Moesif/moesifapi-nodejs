/**
 * MoesifAPILib
 *
 *
 */

var _request = require('../Http/Client/RequestClient'),
    _configuration = require('../configuration'),
    _APIHelper = require('../APIHelper'),
    pjson = require('../../package.json');

var ApiController = {

    /**
     * Add Single API Event Call
     * @param {EventModel} body    Required parameter: Example:
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {void}
     */
    createEvent : function(body, callback){

        //prepare query string for API call;
        var _baseUri = _configuration.BaseUri;

        var _queryBuilder = _baseUri + "/v1/events";

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        //prepare headers
        var _headers = {
            "content-type" : "application/json; charset=utf-8",
            "X-Moesif-Application-Id" : _configuration.ApplicationId,
            "User-Agent": "moesifapi-nodejs/" + pjson.version
        };

        //Remove null values
        _APIHelper.cleanObject(body);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            body : _APIHelper.jsonSerialize(body),
        };

        //Build the response processing.
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null,null,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Add multiple API Events in a single batch (batch size must be less than 250kb)
     * @param {array} body    Required parameter: Example:
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {void}
     */
    createEventsBatch : function(body, callback){

        //prepare query string for API call;
        var _baseUri = _configuration.BaseUri;

        var _queryBuilder = _baseUri + "/v1/events/batch";

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

        //prepare headers
        var _headers = {
            "content-type" : "application/json; charset=utf-8",
            "X-Moesif-Application-Id" : _configuration.ApplicationId,
            "User-Agent": "moesifapi-nodejs/" + pjson.version
        };

        //Remove null values
        _APIHelper.cleanObject(body);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            body : _APIHelper.jsonSerialize(body),
        };

        //Build the response processing.
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                callback(null,null,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    },


  /**
   * Update a single user
   * @param {UserModel} body    Required parameter: Example:
   * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
   *
   * @return {void}
   */
  updateUser : function(body, callback){

    //prepare query string for API call;
    var _baseUri = _configuration.BaseUri;

    var _queryBuilder = _baseUri + "/v1/users";

    //validate and preprocess url
    var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

    //prepare headers
    var _headers = {
      "content-type" : "application/json; charset=utf-8",
      "X-Moesif-Application-Id" : _configuration.ApplicationId,
      "User-Agent": "moesifapi-nodejs/" + pjson.version
    };

    //Remove null values
    _APIHelper.cleanObject(body);

    //Construct the request
    var _options = {
      queryUrl: _queryUrl,
      method: "POST",
      headers: _headers,
      body : _APIHelper.jsonSerialize(body),
    };

    //Build the response processing.
    function cb(_error, _response, _context) {
      if(_error) {
        callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
      } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
        callback(null,null,_context);
      } else {
        callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
      }
    }
    _request(_options, cb);
  },

  /**
   * Update multiple Users in a single batch (batch size must be less than 250kb)
   * @param {array} body    Required parameter: Example:
   * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
   *
   * @return {void}
   */
  updateUsersBatch : function(body, callback){

    //prepare query string for API call;
    var _baseUri = _configuration.BaseUri;

    var _queryBuilder = _baseUri + "/v1/users/batch";

    //validate and preprocess url
    var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);

    //prepare headers
    var _headers = {
      "content-type" : "application/json; charset=utf-8",
      "X-Moesif-Application-Id" : _configuration.ApplicationId,
      "User-Agent": "moesifapi-nodejs/" + pjson.version
    };

    //Remove null values
    _APIHelper.cleanObject(body);

    //Construct the request
    var _options = {
      queryUrl: _queryUrl,
      method: "POST",
      headers: _headers,
      body : _APIHelper.jsonSerialize(body),
    };

    //Build the response processing.
    function cb(_error, _response, _context) {
      if(_error) {
        callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
      } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
        callback(null,null,_context);
      } else {
        callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
      }
    }
    _request(_options, cb);
  }
};

module.exports = ApiController;
