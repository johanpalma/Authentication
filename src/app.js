const express = require('express');
const morgan = require('morgan');
const app = express();

// Imports Routes
const shipmentRoutes = require('./routes/shipment.route');
const carrierRoutes = require('./routes/carrier.route');
const orderRoutes = require('./routes/order.router');
const userRouter = require('./routes/user.route');

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// use routes
app.use('/demo', shipmentRoutes);
app.use('/demo', carrierRoutes);
app.use('/demo', orderRoutes);
app.use('/demo', userRouter);

module.exports = app