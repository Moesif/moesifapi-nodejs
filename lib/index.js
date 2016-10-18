/**
  * @module MoesifAPILib
  *  
  * Collection/Data Ingestion API
  */

var configuration = require('./configuration'),
    ApiController = require('./Controllers/ApiController'),
    HealthController = require('./Controllers/HealthController'),
    EventRequestModel = require('./Models/EventRequestModel'),
    EventModel = require('./Models/EventModel'),
    EventResponseModel = require('./Models/EventResponseModel'),
    StatusModel = require('./Models/StatusModel');


function initializer(){}

//Main functional components of MoesifAPILib
initializer.configuration = configuration;
initializer.ApiController = ApiController;
initializer.HealthController = HealthController;

//Main Models of MoesifAPILib
initializer.EventRequestModel = EventRequestModel;
initializer.EventModel = EventModel;
initializer.EventResponseModel = EventResponseModel;
initializer.StatusModel = StatusModel;

module.exports = initializer;