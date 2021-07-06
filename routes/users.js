const express = require('express');
const router = express.Router();
const { updateUserImage, updateUser, getUser } = require('../controllers/user');
const verifyAuth = require('../middleware/verifyAuth');
const validationMiddleware = require('../middleware/validationMiddleware');
const {userImageSchema, userSchema} = require('../validation/validationUserSchema');
const uploadImg = require('../configs/uploadImg');

router.get('/users', verifyAuth, getUser);
router.patch('/users', verifyAuth, validationMiddleware(userSchema), updateUser);
router.patch('/users/avatar', verifyAuth, validationMiddleware(userImageSchema), uploadImg('image'), updateUserImage);

module.exports = router;
