import { Router } from "express";

export const doc = new Router();

var swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('../docs/swagger.json');

doc.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));