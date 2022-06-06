const express = require('express');

const path = require('path');
const logger = require('morgan');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

const env = process.env.NODE_ENV || 'development';
const config = require('./config/config.json')[env];


const indexRouter = require('./routes/index-routes.js');
const photoRouter = require('./routes/photos.js');


const app = express();

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(helmet());
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/photos', photoRouter);

const PORT = (process.env.PORT || '3000');

app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`)
}); 