const validation = (schema) => async (req, res, next) => {
  const { body: bodyValidation, params: paramsValidation, query: queryValidation } = schema;
  const { body, params, query } = req;

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

    next();
  } catch (error) {
    res.status(400).json({
      error,
      message: error.message
    });
  }
};

module.exports = validation;
