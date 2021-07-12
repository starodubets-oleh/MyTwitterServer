const validation = (schema) => async (req, res, next) => {
  const { body: bodyValidation, params: paramsValidation, query: queryValidation, files: filesValidation } = schema;
  const { body, params, query, files } = req;

  try {
    if (bodyValidation) {
      await bodyValidation.validate(body);
    }

    if (paramsValidation) {
      await paramsValidation.validate(params);
    }

    if (queryValidation) {
      await queryValidation.validate(query);
    }

    if (filesValidation) {
      await filesValidation.validate(files);
    }

    next();
  } catch (error) {
    res.status(400).json({
      error,
      message: error.message
    });
  }
};

module.exports = validation;
