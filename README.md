# Moesif API library for Node.js
by [Moesif](https://moesif.com), the [API analytics](https://www.moesif.com/features/api-analytics) and [API monetization](https://www.moesif.com/solutions/metered-api-billing) platform.

[![NPM](https://nodei.co/npm/moesifapi.png?compact=true&stars=true)](https://nodei.co/npm/moesifapi)

[![Built For][ico-built-for]][link-built-for]
[![Total Downloads][ico-downloads]][link-downloads]
[![Software License][ico-license]][link-license]
[![Source Code][ico-source]][link-source]

> If you're new to Moesif, see [our Getting Started](https://www.moesif.com/docs/) resources to quickly get up and running.

## Prerequisites
Before using this library, make sure you have the following:

- [An active Moesif account](https://moesif.com/wrap)
- [A Moesif Application ID](#get-your-moesif-application-id)

### Get Your Moesif Application ID
After you log into [Moesif Portal](https://www.moesif.com/wrap), you can get your Moesif Application ID during the onboarding steps. You can always access the Application ID any time by following these steps from Moesif Portal after logging in:

1. Select the account icon to bring up the settings menu.
2. Select **Installation** or **API Keys**.
3. Copy your Moesif Application ID from the **Collector Application ID** field.

<img class="lazyload blur-up" src="images/app_id.png" width="700" alt="Accessing the settings menu in Moesif Portal">

## How to install

```shell
npm install moesifapi
```

## How to Use

See `test/ApiControllerTest.js` for more usage examples.

The following examples demonstrate the basid operations using this library. In these examples, replace _`YOUR_COLLECTOR_APPLICATION_ID`_ with your [Moesif Application ID](#get-your-moesif-application-id)

### Create a single API event

```javascript
// 1. Import the module
var moesifapi = require('moesifapi');
var api = moesifapi.ApiController;

// 2. Configure the ApplicationId
var config = moesifapi.configuration;
config.ApplicationId = "YOUR_COLLECTOR_APPLICATION_ID";

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
config.ApplicationId = "YOUR_COLLECTOR_APPLICATION_ID";

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

### Update a single user

To create or update a [user](https://www.moesif.com/docs/getting-started/users/) profile in Moesif, use the `updateUser()` function.


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

The `metadata` field can contain any customer demographic or other info you want to store. Moesif only requires the `userId` field.

This method is a convenient helper that calls the Moesif API library. For more information, see the function documentation in [Moesif Node.js API reference](https://www.moesif.com/docs/api?javascript--nodejs#update-a-user).

### Update Users in Batch
To update a list of [users](https://www.moesif.com/docs/getting-started/users/) in one batch, use the `updateUsersBatch()` function.


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

The `metadata` field can contain any customer demographic or other info you want to store. MOesif only requires the `userId` field.

This method is a convenient helper that calls the Moesif API library. For more information, see the function documentation in [Moesif Node.js API reference](https://www.moesif.com/docs/api?javascript--nodejs#update-users-in-batch).

### Update a Single Company
To update a single [company](https://www.moesif.com/docs/getting-started/companies/), use the `updateCompany()` function.

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

The `metadata` field can contain any company demographic or other information you want to store. Moesif only requires the `companyId` field.

This method is a convenient helper that calls the Moesif API library. For more information, see the function documentation in [Moesif Node.js API reference](https://www.moesif.com/docs/api?javascript--nodejs#update-a-company).

### Update Companies in Batch
To update a list of [companies](https://www.moesif.com/docs/getting-started/companies/) in one batch, use the `updateCompaniesBatch()` function.

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

The `metadata` field can contain any company demographic or other information you want to store. Moesif only requires the `companyId` field.

This method is a convenient helper that calls the Moesif API library. For more information, see the function documentation in [Moesif Node.js API reference](https://www.moesif.com/docs/api?javascript--nodejs#update-companies-in-batch).

### Add a single Action

To track and log single [Action](https://www.moesif.com/docs/getting-started/user-actions/) in Moesif, use the `sendAction()` function.


```javascript
var moesifapi = require('moesifapi');
var apiClient = moesifapi.ApiController;

moesifapi.configuration.ApplicationId = "YOUR_COLLECTOR_APPLICATION_ID";

// Only `actionName` and `request` is required.
// `metadata` is an object containing custom metadata about the Action.
var action = {
  transactionId: "a3765025-46ec-45dd-bc83-b136c8d1d257",
  actionName: "Clicked Sign Up",
  sessionToken: "23jdf0owekfmcn4u3qypxg08w4d8ayrcdx8nu2nz]s98y18cx98q3yhwmnhcfx43f",
  userId: "12345",
  companyId: "67890",
  metadata: {
    email: "johndoe@acmeinc.com",
    button_label: 'Get Started',
    sign_up_method: 'Google SSO'
  },
  request: {
    time: new Date(),
    uri: "https://api.acmeinc.com/items/reviews/",
    ipAddress: "61.48.220.123",
  }
};
// Send the Action
apiClient.sendAction(new ActionModel(action), function(error, response, context) {
  // Do Something
});
```

The `metadata` field can contain any optional metadata about the Action you want to store. Moesif only requires the `actionName` and `request` fields.

This method is a convenient helper that calls the Moesif API library. For more information, see the function documentation in [Moesif Node.js API reference](https://www.moesif.com/docs/api?int_source=docs#track-a-custom-action).

### Add a batch of Actions

To track and log a batch of [Actions](https://www.moesif.com/docs/getting-started/user-actions/) in Moesif, use the `sendActionsBatch()` function.


```javascript
var moesifapi = require('moesifapi');
var apiClient = moesifapi.ApiController;

moesifapi.configuration.ApplicationId = "YOUR_COLLECTOR_APPLICATION_ID";

// Define the request context objects for each action.
var req_contextA = {
  time: new Date(),
  uri: "https://api.acmeinc.com/items/reviews/",
  ipAddress: "61.48.220.123",
  userAgentString: "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0"
};

var req_contextB = {
  time: new Date(),
  uri: "https://api.acmeinc.com/pricing/",
  ipAddress: "61.48.220.126",
  userAgentString: "PostmanRuntime/7.26.5"
};

// Define the actions.
// Only `actionName` and `request` is required.
// `metadata` is an object containing custom metadata about the Action.
var actionA = {
  transactionId: "a3765025-46ec-45dd-bc83-b136a8d1d357",
  actionName: "Clicked Sign Up",
  sessionToken: "23abf0owekfmcn4u3qypxg09w4d8ayrcdx8nu2ng]s98y18cx98q3yhwmnhcfx43f",
  userId: "18340",
  companyId: "25100",
  metadata: {
    email: "alex@acmeinc.com",
    button_label: 'Get Started',
    sign_up_method: 'Google SSO'
  },
  request: req_contextA
};

var actionB = {
  transactionId: "a3765024-46ee-45dd-bc83-b136c8d1d250",
  actionName: "Viewed pricing",
  sessionToken: "23jdf0owejfmbn4u3qypxg09w4d8ayrxdx8nu2ng]s98y18cx98q3yhwmnhcfx43f",
  userId: "12390",
  companyId: "97895",
  metadata: {
    email: "kim@acmeinc.com",
    button_label: 'See pricing',
    sign_up_method: 'Google SSO'
  },
  request: req_contextB
};

var actions = [
  new ActionModel(actionA),
  new ActionModel(actionB)
];
// Send the batch of Actions
apiClient.sendActionsBatch(actions, function(error, response, context) {
  // Do Something
});
```

The `metadata` field can contain any optional metadata about the Action you want to store. Moesif only requires the `actionName` and `request` fields.

This method is a convenient helper that calls the Moesif API library. For more information, see the function documentation in [Moesif Node.js API reference](https://www.moesif.com/docs/api?int_source=docs#track-custom-actions-in-batch).

## How to test

```shell
git clone https://github.com/moesif/moesifapi-nodejs
cd moesifapi-nodejs
npm install --global mocha
mocha
```

## Additional documentation
- [Developer documentation](https://moesif.com/docs)
- [Moesif Node.js API reference](https://www.moesif.com/docs/api?javascript--nodejs)

## How to Get Help
If you face any issues using this library, try the [troubheshooting guidelines](#troubleshoot). For further assistance, reach out to our [support team](mailto:support@moesif.com).

## Explore Moesif Integrations

Explore integration options from Moesif:

- [Server integration options documentation](https://www.moesif.com/docs/server-integration//)
- [Client integration options documentation](https://www.moesif.com/docs/client-integration/)

[ico-built-for]: https://img.shields.io/badge/built%20for-nodejs-blue.svg
[ico-downloads]: https://img.shields.io/npm/dt/moesifapi.svg
[ico-license]: https://img.shields.io/badge/License-Apache%202.0-green.svg
[ico-source]: https://img.shields.io/github/last-commit/moesif/moesifapi-nodejs.svg?style=social

[link-built-for]: https://nodejs.org
[link-downloads]: https://www.npmjs.com/package/moesifapi
[link-license]: https://raw.githubusercontent.com/Moesif/moesifapi-nodejs/master/LICENSE
[link-source]: https://github.com/moesif/moesifapi-nodejs
