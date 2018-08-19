const express = require ('express');

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const rentalRouter = require('./routes/rent.router.js');
const salesRouter = require('./routes/sales.router.js');
const homeRouter = require('./routes/home.router.js');

const pg = require('pg');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); // This line is for angular

app.use('/rent', rentalRouter);
app.use('/sales', salesRouter);
app.use('/home',  homeRouter);




