'use strict';
import 'reflect-metadata';
import 'ts-helpers';
import { useExpressServer } from 'routing-controllers';
import * as mongoose from 'mongoose';
import { CustomerController } from './src/modules/customer/customer.controller';
let express = require('express');

mongoose.connect('mongodb://localhost:27017/customer-crud', {
  useNewUrlParser: true
});

let app = express();

useExpressServer(app, {
  routePrefix: '/api',
  cors: true,
  controllers: [CustomerController],
});

app.use('/uploads',express.static('uploads'));

app.listen(3001);