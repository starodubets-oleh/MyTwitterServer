const yup = require('yup');

const userRegistrationSchema = yup.object({
  name: yup.string().min(2).max(10).required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(12).required()
});
const userLoginSchema = yup.object({
  email: yup.string('Email must be a valid email!').email().required(),
  password: yup.string().required()
});
const createPostSchema = yup.object({
  content: yup.string().typeError('Only as a string').min(3, 'short tweet').max(50, 'long tweet')
});
const updatePostSchema = yup.object({
  updatedPost: yup.string().min(3).max(20).required(),
  id: yup.number().required()
});
const deletePostSchema = yup.object({
  id: yup.number().required()
});
const showPostsSchema = yup.object({
  authorId: yup.number()
});
const showPostSchema = yup.object({
  id: yup.number().required()
});

module.exports = {
  userRegistrationSchema,
  userLoginSchema,
  createPostSchema,
  updatePostSchema,
  deletePostSchema,
  showPostsSchema,
  showPostSchema
};
