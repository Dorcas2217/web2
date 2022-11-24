const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const movieRouter = require('./routes/movies');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/movies', movieRouter);

module.exports = app;
