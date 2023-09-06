'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

// Conecta ao Banco
mongoose.connect('mongodb+srv://root2:root@cluster0.odfrpvf.mongodb.net/?retryWrites=true&w=majority');

// Carrega os Models
const Product = require('./models/Product');

// Carrega as Rotas
const indexRoutes = require('./routes/index');
const productsRoutes = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoutes);
app.use('/product-route', productsRoutes);


module.exports = app;