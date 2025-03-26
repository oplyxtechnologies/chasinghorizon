function errorHandler(err, req, res, next) {
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";
  if (
    err.message === "Email already exists" ||
    err.message === "Email is required" ||
    err.message === "User already exists" ||
    err.message === "Phone number already exists" ||
    err.message === "Phone number is required" ||
    err.message === "Password is required" ||
    err.message === "Fullname is required"
  ) {
    return res.status(403).json({ success: false, error: err.message });
  }

  return res.status(status).json({ success: false, error: message });
}

module.exports = errorHandler;
