const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const postsRoute = require('./routes/posts')
const userRoute = require('./routes/user')

const app = express();

app.use(bodyParser.json());
app.use(cors())

app.use('/posts', postsRoute)
app.use('/user', userRoute)

module.exports = app;