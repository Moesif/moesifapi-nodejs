# MoesifApi Lib for NodeJS

[![NPM](https://nodei.co/npm/moesifapi.png?compact=true&stars=true)](https://nodei.co/npm/moesifapi)

[![Built For][ico-built-for]][link-built-for]
[![Total Downloads][ico-downloads]][link-downloads]
[![Software License][ico-license]][link-license]
[![Source Code][ico-source]][link-source]

[Source Code on GitHub](https://github.com/moesif/moesifapi-nodejs)

__Check out Moesif's [Developer Documentation](https://www.moesif.com/docs) and [Node API Reference](https://www.moesif.com/docs/api?javascript) to learn more__


## How to install

```shell
npm install moesifapi
```

## How to use

(See test/ApiControllerTest.js for more usage examples)

### Create a single API event

```javascript
// 1. Import the module
var moesifapi = require('moesifapi');
var api = moesifapi.ApiController;

// 2. Configure the ApplicationId
var config = moesifapi.configuration;
config.ApplicationId = "my_application_id";

// 3. Generate an API Event Model
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
        '"Date": "Tue, 23 Jan 2019 23:46:49 GMT",' +
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
    time: new Date(),
    uri: "https://api.acmeinc.com/items/reviews/",
    verb: "PATCH",
    apiVersion: "1.1.0",
    ipAddress: "61.48.220.123",
    headers: reqHeaders,
    body: reqBody
};

var eventRsp = {
    time: new Date(),
    status: 500,
    headers: rspHeaders,
    body: rspBody
};

var eventModel = {
    request: eventReq,
    response: eventRsp,
    userId: "my_user_id",
    companyId: "my_company_id",
    sessionToken: "23jdf0owekfmcn4u3qypxg09w4d8ayrcdx8nu2ng]s98y18cx98q3yhwmnhcfx43f",
    metadata: {
      foo: 'abc',
      bar: 'efg'
    }
};

// 4. Create a single event
api.createEvent(new EventModel(eventModel), function(error, response, context) {
  // Do Something
});
```

### Create a batch of API events

You can also create a batch of events at once by sending a list of events.

```javascript
// 1. Import the module
var moesifapi = require('moesifapi');
var api = moesifapi.ApiController;

// 2. Configure the ApplicationId
var config = moesifapi.configuration;
config.ApplicationId = "my_application_id";

// 3. Generate an API Event Model
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
        '"Date": "Tue, 25 Feb 2019 23:46:49 GMT",' +
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
    time: "2019-02-25T04:45:42.914",
    uri: "https://api.acmeinc.com/items/reviews/",
    verb: "PATCH",
    apiVersion: "1.1.0",
    ipAddress: "61.48.220.123",
    headers: reqHeaders,
    body: reqBody
};

var eventRsp = {
    time: "2019-09-09T04:45:42.914",
    status: 500,
    headers: rspHeaders,
    body: rspBody
};

var eventModel = {
    request: eventReq,
    response: eventRsp,
    userId: "my_user_id",
    companyId: "my_company_id",
    sessionToken: "23jdf0owekfmcn4u3qypxg09w4d8ayrcdx8nu2ng]s98y18cx98q3yhwmnhcfx43f"
};

var events = [new EventModel(eventModel),
  new EventModel(eventModel),
  new EventModel(eventModel),
  new EventModel(eventModel)];

// 4. Send batch of events
api.createEventsBatch(events, function(error, response, context) {
  // Do Something
});
```

## Update a Single User

Create or update a user profile in Moesif.
The metadata field can be any customer demographic or other info you want to store.
Only the `userId` field is required.
For details, visit the [Node.js API Reference](https://www.moesif.com/docs/api?javascript--nodejs#update-a-user).

```javascript
var moesifapi = require('moesifapi');
var apiClient = moesifapi.ApiController;

moesifapi.configuration.ApplicationId = "YOUR_COLLECTOR_APPLICATION_ID";

// Only userId is required.
// metadata can be any custom object
var user = {
  userId: '12345',
  companyId: '67890'
  campaign: {
    utmSource: 'google',
    utmMedium: 'cpc', 
    utmCampaign: 'adwords',
    utmTerm: 'api+tooling',
    utmContent: 'landing'
  },
  metadata: {
    email: 'john@acmeinc.com',
    firstName: 'John',
    lastName: 'Doe',
    title: 'Software Engineer',
    salesInfo: {
        stage: 'Customer',
        lifetimeValue: 24000,
        accountOwner: 'mary@contoso.com',
    },
  }
};
// 4. Create a single user
apiClient.updateUser(new moesifapi.UserModel(user), function(error, response, context) {
  // Do Something
});
```

## Update Users in Batch

Similar to UpdateUser, but used to update a list of users in one batch. 
Only the `UserId` field is required.
For details, visit the [Node.js API Reference](https://www.moesif.com/docs/api?javascript--nodejs#update-users-in-batch).

```javascript
var moesifapi = require('moesifapi');
var apiClient = moesifapi.ApiController;

moesifapi.configuration.ApplicationId = "YOUR_COLLECTOR_APPLICATION_ID";

// 3. Generate a User Model
var userA = {
  userId: '12345',
  companyId: '67890'
  campaign: {
    utmSource: 'google',
    utmMedium: 'cpc', 
    utmCampaign: 'adwords',
    utmTerm: 'api+tooling',
    utmContent: 'landing'
  },
  metadata: {
    email: 'john@acmeinc.com',
    firstName: 'John',
    lastName: 'Doe',
    title: 'Software Engineer',
    salesInfo: {
        stage: 'Customer',
        lifetimeValue: 24000,
        accountOwner: 'mary@contoso.com',
    },
  }
};
};

var userB = {
  userId: '67890',
  companyId: '67890'
  campaign: {
    utmSource: 'google',
    utmMedium: 'cpc', 
    utmCampaign: 'adwords',
    utmTerm: 'api+tooling',
    utmContent: 'landing'
  },
  metadata: {
    email: 'mary@contoso.com',
    firstName: 'Mary',
    lastName: 'Jane',
    title: 'Software Engineer',
    salesInfo: {
        stage: 'Customer',
        lifetimeValue: 24000,
        accountOwner: 'mary@contoso.com',
    },
  }
};

var users = [
  new moesifapi.UserModel(userA),
  new moesifapi.UserModel(userB)
];

// 4. Send batch of users
apiClient.updateUsersBatch(users, function(error, response, context) {
  // Do Something
});
```

## Update a Single Company

Create or update a company profile in Moesif.
The metadata field can be any company demographic or other info you want to store.
Only the `company_id` field is required.
For details, visit the [Node.js API Reference](https://www.moesif.com/docs/api?javascript--nodejs#update-a-company).

```javascript
var moesifapi = require('moesifapi');
var apiClient = moesifapi.ApiController;

moesifapi.configuration.ApplicationId = "YOUR_COLLECTOR_APPLICATION_ID";


// Only companyId is required.
// Campaign object is optional, but useful if you want to track ROI of acquisition channels
// See https://www.moesif.com/docs/api#update-a-company for campaign schema
// metadata can be any custom object
var company = {
  companyId: '67890',
  companyDomain: 'acmeinc.com', // If domain is set, Moesif will enrich your profiles with publicly available info 
  campaign: { 
    utmSource: 'google',
    utmMedium: 'cpc', 
    utmCampaign: 'adwords',
    utmTerm: 'api+tooling',
    utmContent: 'landing'
  },
  metadata: {
    orgName: 'Acme, Inc',
    planName: 'Free Plan',
    dealStage: 'Lead',
    mrr: 24000,
    demographics: {
      alexaRanking: 500000,
      employeeCount: 47
    }
  }
};

apiClient.updateCompany(company, function(error, response, context) {
  // Do Something
});
```

## Update Companies in Batch

Similar to updateCompany, but used to update a list of companies in one batch. 
Only the `company_id` field is required.
For details, visit the [Node.js API Reference](https://www.moesif.com/docs/api?javascript--nodejs#update-companies-in-batch).

```javascript
var moesifapi = require('moesifapi');
var apiClient = moesifapi.ApiController;

moesifapi.configuration.ApplicationId = "YOUR_COLLECTOR_APPLICATION_ID";


// Only companyId is required.
// Campaign object is optional, but useful if you want to track ROI of acquisition channels
// See https://www.moesif.com/docs/api#update-a-company for campaign schema
// metadata can be any custom object
var companies = [{
    companyId: '67890',
    companyDomain: 'acmeinc.com', // If domain is set, Moesif will enrich your profiles with publicly available info 
    campaign: { 
      utmSource: 'google',
      utmMedium: 'cpc', 
      utmCampaign: 'adwords',
      utmTerm: 'api+tooling',
      utmContent: 'landing'
    },
    metadata: {
      orgName: 'Acme, Inc',
      planName: 'Free Plan',
      dealStage: 'Lead',
      mrr: 24000,
      demographics: {
        alexaRanking: 500000,
        employeeCount: 47
      }
    }
  },
  {
    companyId: '09876',
    companyDomain: 'contoso.com', // If domain is set, Moesif will enrich your profiles with publicly available info 
    campaign: { 
      utmSource: 'facebook',
      utmMedium: 'cpc', 
      utmCampaign: 'retargeting'
    },
    metadata: {
      orgName: 'Contoso, Inc',
      planName: 'Paid Plan',
      dealStage: 'Lead',
      mrr: 48000,
      demographics: {
        alexaRanking: 500000,
        employeeCount: 53
      }
    }
  }
]

apiClient.updateCompanies(companies, function(error, response, context) {
  // Do Something
});
```

## How To Test:

````shell
git clone https://github.com/moesif/moesifapi-nodejs
cd moesifapi-nodejs
npm install --global mocha
mocha
```

[ico-built-for]: https://img.shields.io/badge/built%20for-nodejs-blue.svg
[ico-downloads]: https://img.shields.io/npm/dt/moesifapi.svg
[ico-license]: https://img.shields.io/badge/License-Apache%202.0-green.svg
[ico-source]: https://img.shields.io/github/last-commit/moesif/moesifapi-nodejs.svg?style=social

[link-built-for]: https://nodejs.org
[link-downloads]: https://www.npmjs.com/package/moesifapi
[link-license]: https://raw.githubusercontent.com/Moesif/moesifapi-nodejs/master/LICENSE
[link-source]: https://github.com/moesif/moesifapi-nodejs
