// here i'm creating middleware that accepts the req res and transform the res into a json

const handleError = (err, req, res, next) => {
  const codeStatus = res.codeStatus ? res.codeStatus : 500;
  res.json({ message: err.message, stackTrace: err.stack });
};
module.exports = handleError;
