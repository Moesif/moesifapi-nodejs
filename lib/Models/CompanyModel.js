
/**
 * MoesifAPILib
 *
 * modifiedTime: Option[DateTime],
 * ipAddress: Option[String],
 * sessionToken: Option[String],
 * companyId: String,
 * companyDomain: Option[String],
 * metadata: Option[JsObject],
 * campaign: Option[CampaignModel]
 */
var BaseModel = require("./BaseModel");
var CampaignModel = require("./CampaignModel");
/**
 * Creates a instance of CompanyModel
 *
 * @constructor
 */
var CompanyModel = function (obj) {
  if(!obj) {
    this.companyId = null;
    this.modifiedTime = null;
    this.ipAddress = null;
    this.sessionToken = null;
    this.companyDomain = null;
    this.metadata = null;
    this.campaign = null;
    // Append to variable dictionary
    this._variableDict['companyId'] = 'company_id'; 
  } else {
    this.companyId = obj.companyId;
    this.modifiedTime = new Date(obj.modifiedTime);
    this.ipAddress = obj.ipAddress;
    this.sessionToken = obj.sessionToken;
    this.companyDomain = obj.companyDomain;
    this.metadata = obj.metadata;
    this.campaign = new CampaignModel(obj.campaign);
    this._variableDict['companyId'] = 'company_id';
  }
};

CompanyModel.prototype = new BaseModel();
CompanyModel.prototype.constructor = CompanyModel;


module.exports = CompanyModel;
