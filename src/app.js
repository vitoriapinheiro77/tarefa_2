const express = require('express');
const routes = require('./routes');
const logger = require('./middlewares/logger');

const app = express();

//Middleware que Intercepta o JSON
app.use(express.json());

//Middleware Global
app.use(logger);

//Rotas users
app.use(userRoutes);

// ROTAS CARS
app.use(carRoutes)

module.exports = app;