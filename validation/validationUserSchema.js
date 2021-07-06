const yup = require('yup');

const SUPPORTED_FORMATS = [ 'image/jpg', 'image/jpeg', 'image/gif', 'image/png' ];

const validateImageType = (value) => {
  if (value) {
    return SUPPORTED_FORMATS.includes(value.mimetype);
  }
};

const validateImageSize = (value) => {
  if (value) {
    return value.size < process.env.IMG_SIZE;
  }
};

const userImageSchema = {
  files: yup.object({
    image: yup
      .mixed()
      .test('fileType', 'Only jpg, jpeg, png, gif are allowed', validateImageType)
      .test('fileSize', 'File is too large!', validateImageSize)
      .required()
  })
};

const userSchema = {
  body: yup.object({
    name: yup.string().min(2).max(10).required()
  })
}

module.exports = {
  userImageSchema,
  userSchema
};
