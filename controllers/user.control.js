const express = require('express');
const services = require('../services/index.service');
const routes = express.Router();

routes.post('/create', services.User.create);
routes.get('/all',services.User.getAll);

module.exports = routes; 