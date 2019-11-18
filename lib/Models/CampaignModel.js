
/**
 * MoesifAPILib
 *
 * utmSource: Option[String],
 * utmMedium: Option[String],
 * utmCampaign: Option[String],
 * utmTerm: Option[String],
 * utmContent: Option[String],
 * referrer: Option[String],
 * referringDomain: Option[String],
 * gclid: Option[String]
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of CampaignModel
 *
 * @constructor
 */
var CampaignModel = function (obj) {
  if(!obj) {
    this.utmSource = null;
    this.utmMedium = null;
    this.utmCampaign = null;
    this.utmTerm = null;
    this.utmContent = null;
    this.referrer = null;
    this.referringDomain = null;
    this.gclid = null;
  } else {
    this.utmSource = obj.utmSource;
    this.utmMedium = obj.utmMedium;
    this.utmCampaign = obj.utmCampaign;
    this.utmTerm = obj.utmTerm;
    this.utmContent = obj.utmContent;
    this.referrer = obj.referrer;
    this.referringDomain = obj.referringDomain;
    this.gclid = obj.gclid;
  }
};

CampaignModel.prototype = new BaseModel();
CampaignModel.prototype.constructor = CampaignModel;


module.exports = CampaignModel;
