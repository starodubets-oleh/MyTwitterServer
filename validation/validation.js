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
  content: yup.string().typeError('Only as a string').min(3, 'short tweet').max(50, 'long tweet').required()
});
const updatePostSchema = yup.object({
  updatedPost: yup.string().min(3).max(50).required(),
  postId: yup.string().trim().matches(/^[0-9]+$/, 'Is not a number').required()
});
const deletePostSchema = yup.object({
  postId: yup.string().trim().matches(/^[0-9]+$/, 'Is not a number').required()
});
const getPostsSchema = yup.object({
  userId: yup.string().trim().matches(/^[0-9]+$/, 'Is not a number')
});
const getPostSchema = yup.object({
  postId: yup.string().trim().matches(/^[0-9]+$/, 'Is not a number').required()
});

const createCommentSchema = yup.object({
  content: yup.string().typeError('Only as a string').min(3, 'short tweet').max(50, 'long tweet').required(),
  postId: yup.string().trim().matches(/^[0-9]+$/, 'Is not a number').required()
});
const updateCommentSchema = yup.object({
  updatedComment: yup.string().min(3).max(50).required(),
  commentId: yup.string().trim().matches(/^[0-9]+$/, 'Is not a number').required()
});
const deleteCommentSchema = yup.object({
  commentId: yup.string().trim().matches(/^[0-9]+$/, 'Is not a number').required()
});

module.exports = {
  userRegistrationSchema,
  userLoginSchema,
  createPostSchema,
  updatePostSchema,
  deletePostSchema,
  getPostsSchema,
  getPostSchema,
  createCommentSchema,
  updateCommentSchema,
  deleteCommentSchema
};