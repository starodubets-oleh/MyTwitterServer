require('dotenv').config();
const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');


const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(fileUpload({}));
app.use('/images', express.static(__dirname + '/images'));
app.use(routes);

module.exports = app;