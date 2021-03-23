'use strict';
import 'reflect-metadata';
import 'ts-helpers';
import { useExpressServer, getMetadataArgsStorage } from 'routing-controllers';
import * as mongoose from 'mongoose';
import { CustomerController } from './src/modules/customer/customer.controller';
let express = require('express');
const swaggerUi = require('swagger-ui-express');

import { validationMetadatasToSchemas } from 'class-validator-jsonschema'
import { routingControllersToSpec } from 'routing-controllers-openapi';
import { defaultMetadataStorage } from 'class-transformer';

mongoose.connect('mongodb+srv://test:' + process.env.MONGO_ATLAS_PW + '@cluster0-zxgny.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });

let app = express();

// this is swagger ui configuration

const routingControllersOptions = {
  controllers: [CustomerController],
  routePrefix: '/api',
}

const schemas = validationMetadatasToSchemas({
  classTransformerMetadataStorage: defaultMetadataStorage,
  refPointerPrefix: '#/components/schemas/',
})

// Parse routing-controllers classes into OpenAPI spec:
const storage = getMetadataArgsStorage()
const spec = routingControllersToSpec(storage, routingControllersOptions, {
  components: {
    schemas,
    securitySchemes: {
      basicAuth: {
        scheme: 'basic',
        type: 'http',
      },
    },
  },
  info: {
    description: 'Generated with `routing-controllers-openapi`',
    title: 'A sample API',
    version: '1.0.0',
  },
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(spec));

// end of swagger configuration

useExpressServer(app, {
  routePrefix: '/api',
  cors: true,
  controllers: [CustomerController],
});

app.use('/temp', express.static('temp'));

app.listen(3001);