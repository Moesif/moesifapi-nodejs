
/**
 * MoesifAPILib
 *
 *
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of EventModel
 *
 * @constructor
 */
var EventModel = function (obj) {
    if(!obj) {
        this.request = null;     
        this.response = null;     
        this.sessionToken = null;     
        this.tags = null;     
        this.userId = null;
        this.metadata = null;
        //Append to variable dictionary
        this._variableDict['sessionToken'] = 'session_token';
        this._variableDict['userId'] = 'user_id';
    } else {
        this.request = new EventRequestModel(obj.request);
        this.response = new EventResponseModel(obj.response);
        this.sessionToken = obj.sessionToken;
        this.tags = obj.tags;
        this.userId = obj.userId;
        this.metadata = obj.metadata;
        //Append to variable dictionary
        this._variableDict['sessionToken'] = 'session_token';
        this._variableDict['userId'] = 'user_id';
    }
};

EventModel.prototype = new BaseModel();
EventModel.prototype.constructor = EventModel;

/**
 * API request object
 *
 * @return {EventRequestModel}
 */
EventModel.prototype.getRequest = function() {
    return this.request;
};

/**
 * Setter for Request
 * 
 * @param {EventRequestModel} value
 */
EventModel.prototype.setRequest = function(value) {
    this.request = value;
};

/**
 * API response Object
 *
 * @return {EventResponseModel|null}
 */
EventModel.prototype.getResponse = function() {
    return this.response;
};

/**
 * Setter for Response
 * 
 * @param {EventResponseModel|null} value
 */
EventModel.prototype.setResponse = function(value) {
    this.response = value;
};

/**
 * End user's auth/session token
 *
 * @return {string|null}
 */
EventModel.prototype.getSessionToken = function() {
    return this.sessionToken;
};

/**
 * Setter for SessionToken
 * 
 * @param {string|null} value 
 */
EventModel.prototype.setSessionToken = function(value) {
    this.sessionToken = value;
};

/**
 * comma separated list of tags, see documentation
 *
 * @return {string|null}
 */
EventModel.prototype.getTags = function() {
    return this.tags;
};

/**
 * Setter for Tags
 * 
 * @param {string|null} value 
 */
EventModel.prototype.setTags = function(value) {
    this.tags = value;
};

/**
 * End user's user_id string from your app
 *
 * @return {string|null}
 */
EventModel.prototype.getUserId = function() {
    return this.userId;
};

/**
 * Setter for UserId
 * 
 * @param {string|null} value 
 */
EventModel.prototype.setUserId = function(value) {
    this.userId = value;
};


/**
 * Metadata in JSON.
 *
 * @return {object|null}
 */
EventModel.prototype.getMetada = function() {
  return this.metadata;
};

/**
 * Setter for Metadata
 *
 * @param {object|null} value
 */
EventModel.prototype.setMetadata = function(value) {
  this.metadata = value;
};


module.exports = EventModel;