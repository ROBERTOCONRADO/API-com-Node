'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

// Conecta ao Banco
mongoose.connect('mongodb+srv://root2:root@cluster0.odfrpvf.mongodb.net/?retryWrites=true&w=majority');

// Carrega os Models
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');

// Carrega as Rotas
const indexRoutes = require('./routes/index');
const productsRoute = require('./routes/product-route');
const customerRoute = require('./routes/customer-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoutes);
app.use('/product-route', productsRoute);
app.use('/customer', customerRoute);


module.exports = app;