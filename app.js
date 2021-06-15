const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const postsRoute = require('./routes/posts')

const app = express();

app.use(bodyParser.json());
app.use(cors())

app.use('/', postsRoute)

module.exports = app;