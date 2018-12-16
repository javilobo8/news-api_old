require('./globals');
const express = require('express');
const models = require('./models');
const config = require('./config');

const createServices = require('./services');
const createControllers = require('./controllers');

require('./db');

const app = express();

const services = createServices({ models, config });

const container = {
  models,
  config,
  services,
};

createControllers(app, container);

module.exports = app;
