// IMPORTS
const express = require('express');
const morgan = require('morgan');

const toursRoutes = require('./routes/v1/tours');

const getRequestTime = require('./middleware/getRequestTime');

// CREATE EXPRESS APP
const app = express();

// MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());
app.use(getRequestTime);

// ROUTES
app.use(toursRoutes);

// START SERVER
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
