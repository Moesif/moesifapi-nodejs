
/**
 * MoesifAPILib
 *
 * modifiedTime: Option[DateTime],
 * ipAddress: Option[String],
 * sessionToken: Option[String],
 * userId: String,
 * userAgentString: Option[String],
 * metadata: Option[JsObject]
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of EventRequestModel
 *
 * @constructor
 */



UserModel = function (obj) {
  if(!obj) {
    this.userId = null;
    this.modifiedTime = null;
    this.ipAddress = null;
    this.sessionToken = null;
    this.userAgentString = null;
    this.metadata = null;
    // this.apiVersion = null;
    // this.ipAddress = null;
    // this.body = null;
    // Append to variable dictionary
  } else {
    this.userId = obj.userId;
    this.modifiedTime = new Date(obj.modifiedTime);
    this.ipAddress = obj.ipAddress;
    this.sessionToken = obj.sessionToken;
    this.userAgentString = obj.userAgentString;
    this.metadata = obj.metadata;
  }
};

UserModel.prototype = new BaseModel();
UserModel.prototype.constructor = UserModel;


module.exports = UserModel;