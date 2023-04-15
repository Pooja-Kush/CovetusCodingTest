const express = require('express');
const morgan = require('morgan');

const userRouter = require('./routes/userRoutes.js');

const app = express();

app.use(morgan('dev'));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
	req.requestTime = new Date().toISOString();
	next();
});

// user routes
app.use('/api/v1/users/', userRouter);

module.exports = app;