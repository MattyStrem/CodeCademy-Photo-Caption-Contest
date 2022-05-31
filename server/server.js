const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');

const indexRouter = require('./routes/index-routes.js');


const app = express();

app.use(logger('dev'));
app.use(helmet());

const PORT = (process.env.PORT || '3000');

app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`)
}); 