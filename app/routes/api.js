import { Router } from "express";

export const api = new Router();

var swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('../docs/swagger.json');

api.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));