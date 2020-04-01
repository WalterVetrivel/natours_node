// IMPORTS
const express = require('express');
const morgan = require('morgan');

const toursRouter = require('./routes/v1/toursRoutes');
const usersRouter = require('./routes/v1/usersRoutes');

const getRequestTime = require('./middleware/getRequestTime');

// CREATE EXPRESS APP
const app = express();

// MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());
app.use(getRequestTime);

// ROUTES
app.use('/api/v1/tours', toursRouter);
app.use('/api/v1/users', usersRouter);

module.exports = app;