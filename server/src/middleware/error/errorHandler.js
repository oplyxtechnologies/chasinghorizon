function errorHandler(err, req, res, next) {
  if (err) {
    const status = err.status || 500;
    const message = err.message || "Internal Server Error";
    return res.status(status).json({ success: false, error: message });
  }

  next();
}

module.exports = errorHandler;
