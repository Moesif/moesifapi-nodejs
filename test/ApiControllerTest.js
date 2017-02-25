var moesifapi = require('../lib/index.js');
var expect = require('chai').expect;
var config = moesifapi.configuration;

config.ApplicationId = "eyJhcHAiOiIzMTU6MSIsInZlciI6IjIuMCIsIm9yZyI6IjM1MToxNSIsImlhdCI6MTQ4Nzk4MDgwMH0.o_hDQF_Y6-4Z3TWMBYi3bbbxHx4gCaW5ieRagJZtZew";

describe('TestAddEvent', function() {
    it('createEvent() should return 201 HTTP status', function(done) {

        var controller = moesifapi.ApiController;

        var reqHeaders = JSON.parse('{' +
                '"Host": "api.acmeinc.com",' +
                '"Accept": "*/*",' +
                '"Connection": "Keep-Alive",' +
                '"User-Agent": "Dalvik/2.1.0 (Linux; U; Android 5.0.2; C6906 Build/14.5.A.0.242)",' +
                '"Content-Type": "application/json",' +
                '"Content-Length": "126",' +
                '"Accept-Encoding": "gzip"' +
            '}');

        var reqBody = JSON.parse( '{' +
                '"items": [' +
                    '{' +
                        '"type": 1,' +
                        '"id": "fwfrf"' +
                    '},' +
                    '{' +
                        '"type": 2,' +
                        '"id": "d43d3f"' +
                    '}' +
                ']' +
            '}');

        var rspHeaders = JSON.parse('{' +
                '"Date": "Tue, 25 Feb 2017 23:46:49 GMT",' +
                '"Vary": "Accept-Encoding",' +
                '"Pragma": "no-cache",' +
                '"Expires": "-1",' +
                '"Content-Type": "application/json; charset=utf-8",' +
                '"Cache-Control": "no-cache"' +
            '}');

        var rspBody = JSON.parse('{' +
                '"Error": "InvalidArgumentException",' +
                '"Message": "Missing field field_a"' +
            '}');

        var eventReq = {
            time: "2017-02-25T04:45:42.914",
            uri: "https://api.acmeinc.com/items/reviews/",
            verb: "PATCH",
            apiVersion: "1.1.0",
            ipAddress: "61.48.220.123",
            headers: reqHeaders,
            body: reqBody
        };

        var eventRsp = {
            time: "2016-09-09T04:45:42.914",
            status: 500,
            headers: rspHeaders,
            body: rspBody
        };

        var eventModel = {
            request: eventReq,
            response: eventRsp,
            userId: "my_user_id",
            sessionToken: "23jdf0owekfmcn4u3qypxg09w4d8ayrcdx8nu2ng]s98y18cx98q3yhwmnhcfx43f"
        };

        var request = controller.createEvent(new EventModel(eventModel), function(error, response, context) {

            expect(context.response.statusCode).to.equal(201);
            if (error) done(error);
            else done();
        });
    });
});


describe('TestAddBatchedEvents', function() {
    it('createEventsBatch() should return 201 HTTP status', function(done) {
        var controller = moesifapi.ApiController;

        var events = "[{ 					\"request\": { 						\"time\": \"2016-02-25T04:45:42.914\", 						\"uri\": \"https://api.acmeinc.com/items/reviews/\", 						\"verb\": \"PATCH\", 						\"api_version\": \"1.1.0\", 						\"ip_address\": \"61.48.220.123\", 						\"headers\": { 							\"Host\": \"api.acmeinc.com\", 							\"Accept\": \"*/*\", 							\"Connection\": \"Keep-Alive\", 							\"User-Agent\": \"Dalvik/2.1.0 (Linux; U; Android 5.0.2; C6906 Build/14.5.A.0.242)\", 							\"Content-Type\": \"application/json\", 							\"Content-Length\": \"126\", 							\"Accept-Encoding\": \"gzip\" 						}, 						\"body\": { 							\"items\": [ 								{ 									\"direction_type\": 1, 									\"discovery_id\": \"fwfrf\", 									\"liked\": false 								}, 								{ 									\"direction_type\": 2, 									\"discovery_id\": \"d43d3f\", 									\"liked\": true 								} 							] 						} 					}, 					\"response\": { 						\"time\": \"2017-02-25T04:45:42.914\", 						\"status\": 500, 						\"headers\": { 							\"Date\": \"Tue, 25 Feb 2017 23:46:49 GMT\", 							\"Vary\": \"Accept-Encoding\", 							\"Pragma\": \"no-cache\", 							\"Expires\": \"-1\", 							\"Content-Type\": \"application/json; charset=utf-8\", 							\"X-Powered-By\": \"ARR/3.0\", 							\"Cache-Control\": \"no-cache\", 							\"Arr-Disable-Session-Affinity\": \"true\" 						}, 						\"body\": { 							\"Error\": \"InvalidArgumentException\", 							\"Message\": \"Missing field field_a\" 						} 					}, 					\"user_id\": \"mndug437f43\", 					\"session_token\": \"23jdf0owekfmcn4u3qypxg09w4d8ayrcdx8nu2ng]s98y18cx98q3yhwmnhcfx43f\" 					 }, { 					\"request\": { 						\"time\": \"2017-10-09T04:46:42.914\", 						\"uri\": \"https://api.acmeinc.com/items/reviews/\", 						\"verb\": \"PATCH\", 						\"api_version\": \"1.1.0\", 						\"ip_address\": \"61.48.220.123\", 						\"headers\": { 							\"Host\": \"api.acmeinc.com\", 							\"Accept\": \"*/*\", 							\"Connection\": \"Keep-Alive\", 							\"User-Agent\": \"Dalvik/2.1.0 (Linux; U; Android 5.0.2; C6906 Build/14.5.A.0.242)\", 							\"Content-Type\": \"application/json\", 							\"Content-Length\": \"126\", 							\"Accept-Encoding\": \"gzip\" 						}, 						\"body\": { 							\"items\": [ 								{ 									\"direction_type\": 1, 									\"discovery_id\": \"fwfrf\", 									\"liked\": false 								}, 								{ 									\"direction_type\": 2, 									\"discovery_id\": \"d43d3f\", 									\"liked\": true 								} 							] 						} 					}, 					\"response\": { 						\"time\": \"2016-09-09T04:46:42.914\", 						\"status\": 500, 						\"headers\": { 							\"Date\": \"Tue, 23 Aug 2016 23:46:49 GMT\", 							\"Vary\": \"Accept-Encoding\", 							\"Pragma\": \"no-cache\", 							\"Expires\": \"-1\", 							\"Content-Type\": \"application/json; charset=utf-8\", 							\"X-Powered-By\": \"ARR/3.0\", 							\"Cache-Control\": \"no-cache\", 							\"Arr-Disable-Session-Affinity\": \"true\" 						}, 						\"body\": { 							\"Error\": \"InvalidArgumentException\", 							\"Message\": \"Missing field field_a\" 						} 					}, 					\"user_id\": \"mndug437f43\", 					\"session_token\": \"23jdf0owekfmcn4u3qypxg09w4d8ayrcdx8nu2ng]s98y18cx98q3yhwmnhcfx43f\" 					 }, { 					\"request\": { 						\"time\": \"2016-09-09T04:47:42.914\", 						\"uri\": \"https://api.acmeinc.com/items/reviews/\", 						\"verb\": \"PATCH\", 						\"api_version\": \"1.1.0\", 						\"ip_address\": \"61.48.220.123\", 						\"headers\": { 							\"Host\": \"api.acmeinc.com\", 							\"Accept\": \"*/*\", 							\"Connection\": \"Keep-Alive\", 							\"User-Agent\": \"Dalvik/2.1.0 (Linux; U; Android 5.0.2; C6906 Build/14.5.A.0.242)\", 							\"Content-Type\": \"application/json\", 							\"Content-Length\": \"126\", 							\"Accept-Encoding\": \"gzip\" 						}, 						\"body\": { 							\"items\": [ 								{ 									\"direction_type\": 1, 									\"discovery_id\": \"fwfrf\", 									\"liked\": false 								}, 								{ 									\"direction_type\": 2, 									\"discovery_id\": \"d43d3f\", 									\"liked\": true 								} 							] 						} 					}, 					\"response\": { 						\"time\": \"2016-09-09T04:47:42.914\", 						\"status\": 500, 						\"headers\": { 							\"Date\": \"Tue, 23 Aug 2016 23:46:49 GMT\", 							\"Vary\": \"Accept-Encoding\", 							\"Pragma\": \"no-cache\", 							\"Expires\": \"-1\", 							\"Content-Type\": \"application/json; charset=utf-8\", 							\"X-Powered-By\": \"ARR/3.0\", 							\"Cache-Control\": \"no-cache\", 							\"Arr-Disable-Session-Affinity\": \"true\" 						}, 						\"body\": { 							\"Error\": \"InvalidArgumentException\", 							\"Message\": \"Missing field field_a\" 						} 					}, 					\"user_id\": \"mndug437f43\", 					\"session_token\": \"23jdf0owekfmcn4u3qypxg09w4d8ayrcdx8nu2ng]s98y18cx98q3yhwmnhcfx43f\" 					 }, { 					\"request\": { 						\"time\": \"2016-09-09T04:48:42.914\", 						\"uri\": \"https://api.acmeinc.com/items/reviews/\", 						\"verb\": \"PATCH\", 						\"api_version\": \"1.1.0\", 						\"ip_address\": \"61.48.220.123\", 						\"headers\": { 							\"Host\": \"api.acmeinc.com\", 							\"Accept\": \"*/*\", 							\"Connection\": \"Keep-Alive\", 							\"User-Agent\": \"Dalvik/2.1.0 (Linux; U; Android 5.0.2; C6906 Build/14.5.A.0.242)\", 							\"Content-Type\": \"application/json\", 							\"Content-Length\": \"126\", 							\"Accept-Encoding\": \"gzip\" 						}, 						\"body\": { 							\"items\": [ 								{ 									\"direction_type\": 1, 									\"discovery_id\": \"fwfrf\", 									\"liked\": false 								}, 								{ 									\"direction_type\": 2, 									\"discovery_id\": \"d43d3f\", 									\"liked\": true 								} 							] 						} 					}, 					\"response\": { 						\"time\": \"2016-09-09T04:48:42.914\", 						\"status\": 500, 						\"headers\": { 							\"Date\": \"Tue, 23 Aug 2016 23:46:49 GMT\", 							\"Vary\": \"Accept-Encoding\", 							\"Pragma\": \"no-cache\", 							\"Expires\": \"-1\", 							\"Content-Type\": \"application/json; charset=utf-8\", 							\"X-Powered-By\": \"ARR/3.0\", 							\"Cache-Control\": \"no-cache\", 							\"Arr-Disable-Session-Affinity\": \"true\" 						}, 						\"body\": { 							\"Error\": \"InvalidArgumentException\", 							\"Message\": \"Missing field field_a\" 						} 					}, 					\"user_id\": \"mndug437f43\", 					\"session_token\": \"exfzweachxjgznvKUYrxFcxv]s98y18cx98q3yhwmnhcfx43f\" 					 }, { 					\"request\": { 						\"time\": \"2016-09-09T04:49:42.914\", 						\"uri\": \"https://api.acmeinc.com/items/reviews/\", 						\"verb\": \"PATCH\", 						\"api_version\": \"1.1.0\", 						\"ip_address\": \"61.48.220.123\", 						\"headers\": { 							\"Host\": \"api.acmeinc.com\", 							\"Accept\": \"*/*\", 							\"Connection\": \"Keep-Alive\", 							\"User-Agent\": \"Dalvik/2.1.0 (Linux; U; Android 5.0.2; C6906 Build/14.5.A.0.242)\", 							\"Content-Type\": \"application/json\", 							\"Content-Length\": \"126\", 							\"Accept-Encoding\": \"gzip\" 						}, 						\"body\": { 							\"items\": [ 								{ 									\"direction_type\": 1, 									\"discovery_id\": \"fwfrf\", 									\"liked\": false 								}, 								{ 									\"direction_type\": 2, 									\"discovery_id\": \"d43d3f\", 									\"liked\": true 								} 							] 						} 					}, 					\"response\": { 						\"time\": \"2016-09-09T04:49:42.914\", 						\"status\": 500, 						\"headers\": { 							\"Date\": \"Tue, 23 Aug 2016 23:46:49 GMT\", 							\"Vary\": \"Accept-Encoding\", 							\"Pragma\": \"no-cache\", 							\"Expires\": \"-1\", 							\"Content-Type\": \"application/json; charset=utf-8\", 							\"X-Powered-By\": \"ARR/3.0\", 							\"Cache-Control\": \"no-cache\", 							\"Arr-Disable-Session-Affinity\": \"true\" 						}, 						\"body\": { 							\"Error\": \"InvalidArgumentException\", 							\"Message\": \"Missing field field_a\" 						} 					}, 					\"user_id\": \"mndug437f43\", 					\"session_token\": \"23jdf0owekfmcn4u3qypxg09w4d8ayrcdx8nu2ng]s98y18cx98q3yhwmnhcfx43f\" 					 }, { 					\"request\": { 						\"time\": \"2016-09-09T04:50:42.914\", 						\"uri\": \"https://api.acmeinc.com/items/reviews/\", 						\"verb\": \"PATCH\", 						\"api_version\": \"1.1.0\", 						\"ip_address\": \"61.48.220.123\", 						\"headers\": { 							\"Host\": \"api.acmeinc.com\", 							\"Accept\": \"*/*\", 							\"Connection\": \"Keep-Alive\", 							\"User-Agent\": \"Dalvik/2.1.0 (Linux; U; Android 5.0.2; C6906 Build/14.5.A.0.242)\", 							\"Content-Type\": \"application/json\", 							\"Content-Length\": \"126\", 							\"Accept-Encoding\": \"gzip\" 						}, 						\"body\": { 							\"items\": [ 								{ 									\"direction_type\": 1, 									\"discovery_id\": \"fwfrf\", 									\"liked\": false 								}, 								{ 									\"direction_type\": 2, 									\"discovery_id\": \"d43d3f\", 									\"liked\": true 								} 							] 						} 					}, 					\"response\": { 						\"time\": \"2016-09-09T04:50:42.914\", 						\"status\": 500, 						\"headers\": { 							\"Date\": \"Tue, 23 Aug 2016 23:46:49 GMT\", 							\"Vary\": \"Accept-Encoding\", 							\"Pragma\": \"no-cache\", 							\"Expires\": \"-1\", 							\"Content-Type\": \"application/json; charset=utf-8\", 							\"X-Powered-By\": \"ARR/3.0\", 							\"Cache-Control\": \"no-cache\", 							\"Arr-Disable-Session-Affinity\": \"true\" 						}, 						\"body\": { 							\"Error\": \"InvalidArgumentException\", 							\"Message\": \"Missing field field_a\" 						} 					}, 					\"user_id\": \"recvreedfef\", 					\"session_token\": \"xcvkrjmcfghwuignrmcmhxdhaaezse4w]s98y18cx98q3yhwmnhcfx43f\" 					 } ]";
        var request = controller.createEventsBatch(JSON.parse(events), function(error, response, context) {

            expect(context.response.statusCode).to.equal(201);
            if (error) done(error);
            else done();
        });
    });
});

describe('TestUpdateUser', function() {
  it('updateUser() should be success with 201 status', function(done) {
    var controller = moesifapi.ApiController;
    var user = '{ "userId": "userfrommoesifApi1", "metadata": { "email": "hello@email.com"} }';

    var request = controller.updateUser(JSON.parse(user), function(error, response, context) {
      expect(context.response.statusCode).to.equal(201);
      if (error) done(error);
      else done();
    });
  });
});