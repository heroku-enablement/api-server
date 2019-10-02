// load libraries
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// set up body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

// load routings
const index = require('./routes/index');
const api = require('./routes/api');

// routing tables
app.use('/', index);
app.use('/api', index);
app.use('/api/v1', index);
app.use('/api/v1/products', api);

// start the server
app.listen(port);
console.log('listen on port ' + port);