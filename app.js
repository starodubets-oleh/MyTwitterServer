const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const postsRoute = require('./routes/posts')
const userRoute = require('./routes/user')
const commentRoute = require('./routes/comments')

const app = express();

app.use(bodyParser.json());
app.use(cors())

app.use('/posts', postsRoute)
app.use('/user', userRoute)
app.use('/comment', commentRoute)

module.exports = app;