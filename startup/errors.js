const { ERRORS } = require("../constants/errorCodes");

const notFoundHandler = (req, res) => {
  return res.status(404).json({
    status: res.status,
    message: ERRORS[404]
  });
};

const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  return res.status(status).json({
    status,
    message: ERRORS[500],
    message: err.message
  });
};

module.exports = {
  notFoundHandler,
  errorHandler
};
