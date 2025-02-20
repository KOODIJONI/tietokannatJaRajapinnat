const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const jwt = require('jsonwebtoken');
const authenticateToken = require('./tools/authenticateToken');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const studentsRouter = require('./routes/students');
const opintojaksoRouter = require('./routes/opintojakso');
const gradesRouter = require('./routes/grades');
const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', loginRouter);
app.use('/register', registerRouter);

app.use(authenticateToken);

app.use('/grades', gradesRouter);
app.use('/users', usersRouter);
app.use('/opintojaksot', opintojaksoRouter);
app.use('/students', studentsRouter);

module.exports = app;
