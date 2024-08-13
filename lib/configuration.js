/**
 * MoesifAPILib
 *
 *
 */
var pjson = require('../package.json');

// some bundlers prevents import of json files
var version = pjson ?  pjson.version : '2.1.9';

var configuration = {
    //The base Uri for API calls
    BaseUri : "https://api.moesif.net",

    //Your Application Id for authentication/authorization
    ApplicationId : "SET_ME",
    UserAgent : 'moesifapi-nodejs/' + version

};

module.exports = configuration;

