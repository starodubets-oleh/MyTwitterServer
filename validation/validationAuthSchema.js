const yup = require('yup');

const userRegistrationSchema = {
  body: yup.object({
    name: yup.string().min(2).max(10).required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).max(12).required()
  })
};

const userLoginSchema = {
  body: yup.object({
    email: yup.string('Email must be a valid one!').email().required(),
    password: yup.string().required()
  })
};

module.exports = {
  userRegistrationSchema,
  userLoginSchema
};
