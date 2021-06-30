const yup = require('yup');

const createCommentSchema = {
  body: yup.object({
    content: yup.string().typeError('Only as a string').min(3, 'short tweet').max(50, 'long tweet').required()
  }),
  params: yup.object({
    postId: yup.string().trim().matches(/^[0-9]+$/, 'Is not a number').required()
  })
};
const updateCommentSchema = {
  body: yup.object({
    updatedComment: yup.string().min(3).max(50).required()
  }),
  params: yup.object({
    commentId: yup.string().trim().matches(/^[0-9]+$/, 'Is not a number').required()
  })
};
const deleteCommentSchema = {
  params: yup.object({
    commentId: yup.string().trim().matches(/^[0-9]+$/, 'Is not a number').required()
  })
};
const getCommentSchema = {
  params: yup.object({
    postId: yup.string().trim().matches(/^[0-9]+$/, 'Is not a number').required()
  })
};

module.exports = {
  createCommentSchema,
  updateCommentSchema,
  deleteCommentSchema,
  getCommentSchema
};
