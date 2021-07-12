const yup = require('yup');

const usersListSchema = {
  query: yup.object({
    limit: yup.string().trim().matches(/^[0-9]+$/, 'Is not a number'),
    postId: yup.string().trim().matches(/^[0-9]+$/, 'Is not a number')
  })
}

module.exports = {
  usersListSchema
};
