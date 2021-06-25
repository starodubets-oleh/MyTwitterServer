const express = require('express');
const router = express.Router();

const {signUp, login} = require('../controllers/user.controller');
const validation = require('../middleware/validationMiddleware');
const {userLoginSchema, userRegistrationSchema} = require('../validation/validation');

router.post('/sign-up',validation(userRegistrationSchema), signUp);
router.post('/login',validation(userLoginSchema), login);

module.exports = router;