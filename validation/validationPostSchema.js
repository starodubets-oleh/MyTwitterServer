const yup = require('yup');

const validationPoint = (value) => {
  if (value) {
    if (value === 'null') {
      return true
    } else {
      return value.match(/^[0-9]+$/)
    }
  }
}

const createPostSchema = {
  body: yup.object({
    content: yup.string().typeError('Only as a string').min(3, 'short tweet').max(50, 'long tweet').required()
  })
};
const updatePostSchema = {
  body: yup.object({
    updatedPost: yup.string().min(3).max(50).required()
  }),
  params: yup.object({
    postId: yup.string().trim().matches(/^[0-9]+$/, 'Is not a number').required()
  })
};
const deletePostSchema = {
  params: yup.object({
    postId: yup.string().trim().matches(/^[0-9]+$/, 'Is not a number').required()
  })
};
const getPostsSchema = {
  params: yup.object({
    userId: yup.string().trim().matches(/^[0-9]+$/, 'Is not a number').required(),
  }),
  query: yup.object({
    size: yup.string().trim().matches(/^[0-9]+$/, 'Is not a number'),
    point: yup.string().trim().matches(/^[0-9]+$/, 'Is not a number')
  })
};
const getPostSchema = {
  params: yup.object({
    userId: yup.string().trim().matches(/^[0-9]+$/, 'Is not a number').required(),
  })
};

module.exports = {
  createPostSchema,
  updatePostSchema,
  deletePostSchema,
  getPostsSchema,
  getPostSchema
};
