
/**
 * MoesifAPILib
 *
 * subscriptionId: Option[String],
 * companyId: Option[String],
 * currentPeriodStart: Option[DateTime],
 * currentPeriodEnd: Option[DateTime],
 * status: Option[String],
 * metadata: Option[JsObject]
 */

var BaseModel = require("./BaseModel");
/**
 * Creates a instance of SubscriptionModel
 *
 * @constructor
 */
var SubscriptionModel = function (obj) {
  if(!obj) {
    this.subscription_id = null;
    this.company_id = null;
    this.current_period_start = null;
    this.current_period_end = null;
    this.status = null;
    this.metadata = null;
  } else {
    this.subscription_id = obj.subscriptionId;
    this.company_id = obj.companyId;
    this.current_period_start = obj.currentPeriodStart;
    this.current_period_end = obj.currentPeriodEnd;
    this.status = obj.status;
    this.metadata = obj.metadata;
  }

  // Append to variable dictionary
  this._variableDict['subscriptionId'] = 'subscription_id';
  this._variableDict['companyId'] = 'company_id';
  this._variableDict['currentPeriodStart'] = 'current_period_start';
  this._variableDict['currentPeriodEnd'] = 'current_period_end';
  this._variableDict['status'] = 'status';
};

SubscriptionModel.prototype = new BaseModel();
SubscriptionModel.prototype.constructor = SubscriptionModel;


/**
 * Get the subscription id
 *
 * @return {string}
 */
SubscriptionModel.prototype.getSubscriptionId = function() {
    return this.subscription_id;
  };
  
  /**
   * Setter for the subscription id
   *
   * @param {string} value
   */
  SubscriptionModel.prototype.setSubscriptionId = function(value) {
    this.subscription_id = value;
  };
  
  /**
   * Get the company id
   *
   * @return {string}
   */
  SubscriptionModel.prototype.getCompanyId = function() {
    return this.company_id;
  };
  
  /**
   * Setter for the company id
   *
   * @param {string} value
   */
  SubscriptionModel.prototype.setCompanyId = function(value) {
    this.company_id = value;
  };
  
  /**
   * Get the current period start
   *
   * @return {dateTime|null}
   */
  SubscriptionModel.prototype.getCurrentPeriodStart = function() {
    return this.current_period_start;
  };
  
  /**
   * Setter for the current period start
   *
   * @param {dateTime|null} value
   */
  SubscriptionModel.prototype.setCurrentPeriodStart = function(value) {
    this.current_period_start = value;
  };
  
  /**
   * Get the current period end
   *
   * @return {dateTime|null}
   */
  SubscriptionModel.prototype.getCurrentPeriodEnd = function() {
    return this.current_period_end;
  };
  
  /**
   * Setter for the current period end
   *
   * @param {dateTime|null} value
   */
  SubscriptionModel.prototype.setCurrentPeriodEnd = function(value) {
    this.current_period_end = value;
  };
  
  /**
   * Get the status
   *
   * @return {string|null}
   */
  SubscriptionModel.prototype.getStatus = function() {
    return this.status;
  };
  
  /**
   * Setter for the status
   *
   * @param {string|null} value
   */
  SubscriptionModel.prototype.setStatus = function(value) {
    this.status = value;
  };
  
  /**
   * Get the metadata
   *
   * @return {object|null}
   */
  SubscriptionModel.prototype.getMetadata = function() {
    return this.metadata;
  };
  
  /**
   * Setter for the metadata
   *
   * @param {object|null} value
   */
  SubscriptionModel.prototype.setMetadata = function(value) {
    this.metadata = value;
  };
  
  module.exports = SubscriptionModel;
  
