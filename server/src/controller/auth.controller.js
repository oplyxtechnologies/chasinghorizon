const { hashPassword, comparePassword } = require("../lib/bcrypt/bcrypt");
const { signupmail } = require("../lib/mail/Mail");
const { createjwtToken, verifyjwtToken } = require("../lib/token/jwt");
const {
  createUser,
  verifyUser,
  loginUserService,
  getAllUserService,
} = require("../services/auth/auth.service");

exports.signUpController = async (req, res, next) => {
  let data = req.body;
  const hashedPassword = await hashPassword(data.password);
  data = {
    ...data,
    password: hashedPassword,
  };
  try {
    const user = await createUser(data);
    const verificationToken = await createjwtToken(user.id, "1d");
    signupmail({
      receiver: user.email,
      username: user.fullName,
      verificationToken: verificationToken,
    });
    res.status(200).json({
      success: true,
      data: user,
      message: `Verification mail sent to ${user.email}`,
    });
  } catch (error) {
    next(error);
  }
};

exports.verifyController = async (req, res, next) => {
  const token = req.query.token;
  try {
    const verifyToken = await verifyjwtToken(token);
    const result = await verifyUser({ id: verifyToken.id });
    res.status(200).json({
      success: true,
      message: "User registered successfully",
      data: result,
    });
  } catch (error) {}
};

exports.loginController = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await loginUserService(email);

    !user
      ? next({ status: 404, message: "Invalid Credentials" })
      : !user.isVerified
      ? next({ status: 400, message: "Please verify your account" })
      : null;

    const validPassword = await comparePassword({
      password: password,
      hashedPassword: user.password,
    });

    !validPassword
      ? next({ status: 404, message: "Invalid Credentials" })
      : null;

    const token = await createjwtToken(user.id, "1d");

    res.cookie("token", token).status(200).json({
      success: true,
      message: "Login Successfull",
      token: token,
    });
  } catch (error) {
    next({
      status: 500,
      message: error.message,
    });
  }
};

exports.getAllUsersController = async (req, res, next) => {
  try {
    const users = await getAllUserService();
    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      users,
    });
  } catch (error) {
    next({
      status: 500,
      message: error.message,
    });
  }
};
