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
    StatusModel = require('./Models/StatusModel'),
    UserModel = require('./Models/UserModel'),
    CompanyModel = require('./Models/CompanyModel'),
    CampaignModel = require('./Models/CampaignModel'),
    SubscriptionModel = require('./Models/SubscriptionModel'),
    ActionModel = require('./Models/ActionModel')


function initializer(){}

//Main functional components of MoesifAPILib
initializer.configuration = configuration;
initializer.ApiController = ApiController;
initializer.HealthController = HealthController;

//Main Models of MoesifAPILib
initializer.EventRequestModel = EventRequestModel;
initializer.EventModel = EventModel;
initializer.UserModel = UserModel;
initializer.CompanyModel = CompanyModel;
initializer.SubscriptionModel = SubscriptionModel;
initializer.CampaignModel = CampaignModel;
initializer.EventResponseModel = EventResponseModel;
initializer.StatusModel = StatusModel;
initializer.ActionModel = ActionModel;

module.exports = initializer;
