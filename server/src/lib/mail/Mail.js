const pug = require("pug");
const path = require("path");
const sendMail = require("../../utils/sendMail");

async function signupmail({ receiver, username, verificationToken }) {
  const htmlContent = pug.renderFile(
    path.join(__dirname, "./template/signup.jade"),
    {
      name: username,
      verificationToken: verificationToken,
    }
  );
  try {
    await sendMail({
      from: '"Chasing Horizon" <chasinghorizon@gmail.com>',
      to: receiver,
      subject: "Account Registration for Chasing Horizon",
      html: htmlContent,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { signupmail };
