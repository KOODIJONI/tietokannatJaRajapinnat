var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var studentsRouter = require('./routes/students');
var opintojaksoRouter = require('./routes/opintojakso');
var gradesRouter = require('./routes/grades');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/grades', gradesRouter);
app.use('/users', usersRouter);
app.use('/opintojaksot', opintojaksoRouter);
app.use('/students', studentsRouter);

module.exports = app;
