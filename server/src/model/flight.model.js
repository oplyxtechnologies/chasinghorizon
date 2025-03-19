const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema(
  {
    flightName: {
      type: String,
      required: true,
      trim: true,
    },
    flightNumber: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    passenger_info: [
      {
        name: "String",
        age: "Number",
        gender: "String",
        seat: "String",
      },
    ],
    airline: {
      type: String,
      required: true,
      trim: true,
    },
    from: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
    },
    to: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
    },
    departure: {
      type: Date,
      required: true,
    },
    arrival: {
      type: Date,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
      min: 0,
    },
    bookedseat: {
      type: Number,
      required: true,
      min: 0,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    payment: [
      {
        method: String,
        status: String,
        amount: Number,
        currency: String,
        date: Date,
      },
    ],
  },
  { timestamps: true }
);

const Flight = mongoose.model("Flight", flightSchema);
module.exports = Flight;
