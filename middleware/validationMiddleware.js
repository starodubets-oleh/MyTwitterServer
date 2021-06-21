const validation = (schema) => async (req, res, next) => {

  const data = {
    ...req.body,
    ...req.query,
    ...req.params
  }

  try {
    await schema.validate(data);
    next();
  } catch (error) {
    res.status(400).json({
      error,
      message: error.message
    })
  }
};

module.exports = validation;