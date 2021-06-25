const express = require('express');
const router = express.Router();

const {signUp, login} = require('../controllers/user.controller');


router.post('/sign-up', signUp);
router.post('/login', login);

module.exports = router;