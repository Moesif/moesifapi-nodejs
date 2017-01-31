# MoesifApi Lib for NodeJS


[Source Code on GitHub](https://github.com/moesif/moesifapi-nodejs)

[Package on NPMJS](https://www.npmjs.com/package/moesifapi)

__Check out Moesif's [Developer Documentation](https://www.moesif.com/docs) and [Node API Reference](https://www.moesif.com/docs/api?javascript) to learn more__


## Install from NPM:

```shell
npm install moesifapi
```

## How To Use:


(See ApiControllerTest.js for usage examples)

```javascript
///////////////////////////
// 1. Import the module: //
///////////////////////////
    var moesifapi = require('moesifapi');


////////////////////////////////
// 2. Configure ApplicationId //
////////////////////////////////
    var config = moesifapi.configuration;
    config.ApplicationId = my_application_id;


///////////////////////////////
// 3. Create API Event Model //
///////////////////////////////
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
            '"Date": "Tue, 23 Aug 2016 23:46:49 GMT",' +
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
        time: "2016-09-09T04:45:42.914",
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


//////////////////////////
// 4. Create new event: //
//////////////////////////
    var controller = moesifapi.ApiController;

    // Create a single event
    controller.createEvent(new EventModel(eventModel), callback);

    // Create batched set of events
    controller.createEventsBatch(someEventModelList, callback);
```


## How To Test:

````shell
git clone https://github.com/moesif/moesifapi-nodejs
cd moesifapi-nodejs
npm install --global mocha
mocha
```
