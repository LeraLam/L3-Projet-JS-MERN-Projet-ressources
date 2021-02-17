const express = require('express');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const path = require('path');

// connection to database
const dbConnection = require('./controllers/db.js');

const app = express();

// to handle CORS
const cors = require('cors');

app.use(cors());

// Routes
const indexRouter = require('./routes/indexRoute');
const customersRouter = require('./routes/customersRoute');
const datasRouter = require('./routes/datasRoute');
const resourceApiRouter = require('./routes/ressourceApiRoute');
const customerApiRouter = require('./routes/customerApiRoute');

// Gestion vues
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './public')));

// gestion Routes
app.use('/', indexRouter);
app.use('/customers', customersRouter);
app.use('/resources', datasRouter);

// routes apiREST
app.use('/api/resources', resourceApiRouter);
app.use('/api/customers', customerApiRouter);

// Erreur 404
app.use((req, res, next) => next(createError(404)));

module.exports = app;
