/**
 * MoesifAPILib
 *
 *
 */
pjson = require('../package.json');

var configuration = {
    //The base Uri for API calls
    BaseUri : "https://api.moesif.net",

    //Your Application Id for authentication/authorization
    ApplicationId : "SET_ME",
    UserAgent : 'moesifapi-nodejs/' + pjson.version

};

module.exports = configuration;

