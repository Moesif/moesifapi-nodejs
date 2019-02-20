
/**
 * MoesifAPILib
 *
 * modifiedTime: Option[DateTime],
 * ipAddress: Option[String],
 * sessionToken: Option[String],
 * companyId: String,
 * companyDomain: Option[String],
 * metadata: Option[JsObject]
 */
var BaseModel = require("./BaseModel");
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
    // Append to variable dictionary
    this._variableDict['companyId'] = 'company_id'; 
  } else {
    this.companyId = obj.companyId;
    this.modifiedTime = new Date(obj.modifiedTime);
    this.ipAddress = obj.ipAddress;
    this.sessionToken = obj.sessionToken;
    this.companyDomain = obj.companyDomain;
    this.metadata = obj.metadata;
    this._variableDict['companyId'] = 'company_id';
  }
};

CompanyModel.prototype = new BaseModel();
CompanyModel.prototype.constructor = CompanyModel;


module.exports = CompanyModel;
