const express = require('express');
const router = express.Router();
const { updateUserImage, updateUser, getUser, getUsers } = require('../controllers/user');
const verifyAuth = require('../middleware/verifyAuth');
const validationMiddleware = require('../middleware/validationMiddleware');
const {userImageSchema, userSchema} = require('../validation/validationUserSchema');
const uploadImg = require('../configs/uploadImg');
const { usersListSchema } = require('../validation/validationUsersSchema');

router.get('/user', verifyAuth, getUser);
router.get('/users', verifyAuth,validationMiddleware(usersListSchema), getUsers);
router.patch('/users', verifyAuth, validationMiddleware(userSchema), updateUser);
router.patch('/users/avatar', verifyAuth, validationMiddleware(userImageSchema), uploadImg('image'), updateUserImage);

module.exports = router;
