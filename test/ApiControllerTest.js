var moesifapi = require('../lib/index.js');
var expect = require('chai').expect;
var config = moesifapi.configuration;

config.ApplicationId = "your application id";

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

        var metadata = {
          testData: 1,
          metaData2: {
            a: 'abc',
            b: 'abc'
          }
        };
        var reqDate = new Date();
        var eventReq = {
            time: reqDate,
            uri: "https://api.acmeinc.com/items/reviews/",
            verb: "PATCH",
            apiVersion: "1.1.0",
            ipAddress: "61.48.220.123",
            headers: reqHeaders,
            body: reqBody
        };

        var eventRsp = {
            time: (new Date()).setMilliseconds(reqDate.getMilliseconds() + 500),
            status: 500,
            headers: rspHeaders,
            body: rspBody
        };

        var eventModel = {
            request: eventReq,
            response: eventRsp,
            userId: "my_user_id",
            sessionToken: "23jdf0owekfmcn4u3qypxg09w4d8ayrcdx8nu2ng]s98y18cx98q3yhwmnhcfx43f",
            metadata: metadata
        };

        var request = controller.createEvent(new EventModel(eventModel), function(error, response, context) {
            console.log(error);

            expect(context.response.statusCode).to.equal(201);
            if (error) done(error);
            else done();
        });
    });
});


describe('TestAddBatchedEvents', function() {
    it('createEventsBatch() should return 201 HTTP status', function(done) {
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

        var reqDate = new Date();

        var eventReq = {
            time: reqDate,
            uri: "https://api.acmeinc.com/items/reviews/",
            verb: "PATCH",
            apiVersion: "1.1.0",
            ipAddress: "61.48.220.123",
            headers: reqHeaders,
            body: reqBody
        };

        var eventRsp = {
            time: (new Date()).setMilliseconds(reqDate.getMilliseconds() + 300),
            status: 500,
            headers: rspHeaders,
            body: rspBody
        };

        var eventModel = {
            request: eventReq,
            response: eventRsp,
            userId: "my_user_id",
            sessionToken: "23jdf0owekfmcn4u3qypxg09w4d8ayrcdx8nu2ng]s98y18cx98q3yhwmnhcfx43f",
            metadata: {
              foo: 'abc',
              bar: 'efg'
            }
        };

        var events = [new EventModel(eventModel),
          new EventModel(eventModel),
          new EventModel(eventModel),
          new EventModel(eventModel)];

        var request = controller.createEventsBatch(events, function(error, response, context) {

            expect(context.response.statusCode).to.equal(201);
            if (error) done(error);
            else done();
        });
    });
});

describe('TestUpdateUser', function() {
  it('updateUser() should be success with 201 status', function(done) {
    var controller = moesifapi.ApiController;
    var user = {
        userId: "my_user_id",
        sessionToken: "23jdf0owekfmcn4u3qypxg09w4d8ayrcdx8nu2ng]s98y18cx98q3yhwmnhcfx43f",
        metadata: {
          email: "johndoe@acmeinc.com",
          string_field: "value_1",
          number_field: 0,
          object_field: {
            field_a: "value_a",
            field_b: "value_b"
          }
        }
    };

    var request = controller.updateUser(new UserModel(user), function(error, response, context) {
      expect(context.response.statusCode).to.equal(201);
      if (error) done(error);
      else done();
    });
  });
});

describe('TestUpdateUsersBatch', function() {
  it('updateUsersBatch() should be success with 201 status', function(done) {
    var controller = moesifapi.ApiController;
    var userA = {
        userId: "12345",
        sessionToken: "23jdf0owekfmcn4u3qypxg09w4d8ayrcdx8nu2ng]s98y18cx98q3yhwmnhcfx43f",
        metadata: {
          email: "johndoe@acmeinc.com",
          string_field: "value_1",
          number_field: 0,
          object_field: {
            field_a: "value_a",
            field_b: "value_b"
          }
        }
    };

    var userB = {
        userId: "6789",
        sessionToken: "23jdf0oszfexfqe[lwjfiefovprewv4d8ayrcdx8nu2ng]zfeeadedefx43f",
        metadata: {
          email: "maryjane@acmeinc.com",
          string_field: "value_1",
          number_field: 1,
          object_field: {
            field_a: "value_a",
            field_b: "value_b"
          }
        }
    };

    var users = [new UserModel(userA), new UserModel(userB)];

    var request = controller.updateUsersBatch(users, function(error, response, context) {
      expect(context.response.statusCode).to.equal(201);
      if (error) done(error);
      else done();
    });
  });
});
