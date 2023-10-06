const { ValidationError } = require("express-validation");

module.exports = {
  ExpressValidation: (err, req, res, next) => {
    if (err instanceof ValidationError) {
      let _temp = {
        name: err.name,
        statusCode: err.statusCode,
        stack: err.stack,
        errors: err.details,
      };

      return res.status(err.statusCode).json(_temp);
    }

    next(err);
  },
};
