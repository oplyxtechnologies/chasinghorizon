var { default: mongoose } = require("mongoose");

var userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Username is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email already exists"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Phone number is required"],
    unique: [true, "Phone number already exists"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  role: {
    type: String,
    enum: ["user", "admin"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
});

var User = mongoose.model("User", userSchema);
module.exports = User;
