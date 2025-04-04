const mongoose = require("mongoose");
const { hashOTP } = require("../lib/bcrypt/bcrypt");

const otpSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    otp: {
      type: Number,
      required: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ["expired", "verified", "pending"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

// otpSchema.pre("save", async function (next) {
//   this.otp = await hashOTP(this.otp);
//   next();
// });

const OTP = mongoose.model("OTP", otpSchema);
module.exports = OTP;
