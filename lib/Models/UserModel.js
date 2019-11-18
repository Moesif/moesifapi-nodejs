
/**
 * MoesifAPILib
 *
 * modifiedTime: Option[DateTime],
 * ipAddress: Option[String],
 * sessionToken: Option[String],
 * userId: String,
 * companyId: Option[String],
 * userAgentString: Option[String],
 * metadata: Option[JsObject],
 * campaign: Option[CampaignModel]
 */
var BaseModel = require("./BaseModel");
var CampaignModel = require("./CampaignModel");
/**
 * Creates a instance of UserModel
 *
 * @constructor
 */
var UserModel = function (obj) {
  if(!obj) {
    this.userId = null;
    this.companyId = null;
    this.modifiedTime = null;
    this.ipAddress = null;
    this.sessionToken = null;
    this.userAgentString = null;
    this.metadata = null;
    this.campaign = null;
    // Append to variable dictionary
    this._variableDict['userId'] = 'user_id'; 
    this._variableDict['companyId'] = 'company_id'; 
  } else {
    this.userId = obj.userId;
    this.companyId = obj.companyId;
    this.modifiedTime = new Date(obj.modifiedTime);
    this.ipAddress = obj.ipAddress;
    this.sessionToken = obj.sessionToken;
    this.userAgentString = obj.userAgentString;
    this.metadata = obj.metadata;
    this.campaign = new CampaignModel(obj.campaign);
    this._variableDict['userId'] = 'user_id';
    this._variableDict['companyId'] = 'company_id';
  }
};

UserModel.prototype = new BaseModel();
UserModel.prototype.constructor = UserModel;


module.exports = UserModel;
