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

module.exports = {
  userImageSchema
};
