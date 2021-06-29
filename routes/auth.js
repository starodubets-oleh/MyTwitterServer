const express = require('express');
const router = express.Router();
const { signUp, login } = require('../controllers/user');
const validationMiddleware = require('../middleware/validationMiddleware');
const { userLoginSchema, userRegistrationSchema } = require('../validation/validationAuthSchema');

router.post('/auth/sign-up', validationMiddleware(userRegistrationSchema), signUp);
router.post('/auth/login', validationMiddleware(userLoginSchema), login);

module.exports = router;
