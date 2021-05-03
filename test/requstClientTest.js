var moesifapi = require('../lib/index.js');
var _APIHelper = require('../lib/APIHelper');
var _request = require('../lib/Http/Client/RequestClient');

var config =  moesifapi.configuration;

describe('RequestClient', function (done) {
  this.timeout(100000);
  it('it should trigger no retry process', function(done) {

    var _options = {
      queryUrl: 'https://webhook.site/dc8f2189-17ca-4038-8613-3940080928f4',
      method: "POST",
      headers: {
        'content-type' : 'application/json; charset=utf-8',
      },
      body: _APIHelper.jsonSerialize({
        abc: '1234'
      })
    }

    var callback = function(error, response, context) {
      if (error) {
        console.log('error triggered');
        console.log(error.toString());
      } else {
        console.log('succeeded');
        console.log(response);
      }
      done();
    }
    _request(_options, callback);
  });

  it ('it should retry 3 times', function (done) {
    config.retry = 3;

    var _options = {
      queryUrl: 'https://nowhere1234.com',
      method: "POST",
      headers: {
        'content-type' : 'application/json; charset=utf-8',
      },
      body: _APIHelper.jsonSerialize({
        abc: '1234'
      })
    }

    var callback = function(error, response, context) {
      if (error) {
        console.log('error triggered');
        console.log(error.toString());
      } else {
        console.log('succeeded');
        console.log(response);
      }
      done();
    }
    _request(_options, callback);
  });

  it ('it should trigger the retry method, but should succeed on first time.', function (done) {
    config.retry = 2;

    var _options = {
      queryUrl: 'https://webhook.site/dc8f2189-17ca-4038-8613-3940080928f4',
      method: "POST",
      headers: {
        'content-type' : 'application/json; charset=utf-8',
      },
      body: _APIHelper.jsonSerialize({
        abc: '1234'
      })
    }

    var callback = function(error, response, context) {
      if (error) {
        console.log('error triggered');
        console.log(error.toString());
      } else {
        console.log('succeeded');
        console.log(response);
      }
      done();
    }

    _request(_options, callback);
  });

});

