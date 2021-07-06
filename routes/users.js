const express = require('express');
const router = express.Router();
const { updateUserImage, updateUser } = require('../controllers/user');
const verifyAuth = require('../middleware/verifyAuth');
const validationMiddleware = require('../middleware/validationMiddleware');
const {userImageSchema} = require('../validation/validationUserSchema');
const uploadImg = require('../configs/uploadImg');

router.patch('/users', verifyAuth, validationMiddleware(userImageSchema), updateUser);
router.patch('/users/avatar', verifyAuth, validationMiddleware(userImageSchema), uploadImg('image'), updateUserImage);

module.exports = router;
