/**
 * MoesifAPILib
 *
 * transactionId: Option[String],
 * actionName: String,
 * sessionToken: Option[String],
 * userId: String,
 * companyId: Option[String],
 * metadata: Option[JsObject],
 * request: Option[JsObject]
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of ActionModel
 *
 * @constructor
 */
var ActionModel = function (obj) {
  if (!obj) {
    this.transactionId = null;
    this.actionName = null;
    this.sessionToken = null;
    this.userId = null;
    this.companyId = null;
    this.metadata = null;
    this.request = null;
  } else {
    this.transactionId = obj.transactionId;
    this.actionName = obj.actionName;
    this.sessionToken = obj.sessionToken;
    this.userId = obj.userId;
    this.companyId = obj.companyId;
    this.metadata = obj.metadata;
    this.request = obj.request;
  }

  // Append to variable dictionary
  this._variableDict["userId"] = "user_id";
  this._variableDict["companyId"] = "company_id";
  this._variableDict["sessionToken"] = "session_token";
  this._variableDict["transactionId"] = "transaction_id";
  this._variableDict["actionName"] = "action_name";
};

ActionModel.prototype = new BaseModel();
ActionModel.prototype.constructor = ActionModel;

/**
 * The user Id
 *
 * @return {string}
 */
ActionModel.prototype.getUserId = function () {
  return this.userId;
};

/**
 * Setter for the user Id
 *
 * @param {string} value
 */
ActionModel.prototype.setUserId = function (value) {
  this.userId = value;
};

/**
 * The company Id
 *
 * @return {string|null}
 */
ActionModel.prototype.getCompanyId = function () {
  return this.companyId;
};

/**
 * Setter for the company Id
 *
 * @param {string|null} value
 */
ActionModel.prototype.setCompanyId = function (value) {
  this.companyId = value;
};

/**
 * Get the session token
 *
 * @return {string|null}
 */
ActionModel.prototype.getSessionToken = function () {
  return this.sessionToken;
};

/**
 * Setter for the session token
 *
 * @param {string|null} value
 */
ActionModel.prototype.setSessionToken = function (value) {
  this.sessionToken = value;
};

/**
 * Metadata in JSON.
 *
 * @return {object|null}
 */
ActionModel.prototype.getMetadata = function () {
  return this.metadata;
};

/**
 * Setter for Metadata
 *
 * @param {object|null} value
 */
ActionModel.prototype.setMetadata = function (value) {
  this.metadata = value;
};

module.exports = ActionModel;
