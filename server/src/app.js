const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const indexRouter = require("./routes/index");
const userRouter = require("./routes/auth.route");
const connectMongo = require("./config/db/connectMongoose");
const {
  defaultLimiter,
  loginLimiter,
} = require("./middleware/express-limit/express-limit");
const errorHandler = require("./middleware/error/errorHandler");
const { connectPostgres } = require("./config/db/connectPostgres");
const { connectRedis } = require("./config/db/connectRedis");
const { CORS_ORIGIN } = require("./config/env");

const app = express();

connectMongo();
connectPostgres();
connectRedis();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.get("/health", (req, res) => {
  res.send("Server is working fine");
});

app.get("/version", (req, res) => {
  res.send("Chasing Horizon Version 1.0.0");
});

app.use(logger("dev"));
app.use(express.json());
app.use(
  cors({
    origin: CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", defaultLimiter, indexRouter);
app.use("/users", loginLimiter, userRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
// app.use(function (err, req, res, next) {
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   res.status(err.status || 500);
//   res.render("error");
// });

app.use(errorHandler);

module.exports = app;
