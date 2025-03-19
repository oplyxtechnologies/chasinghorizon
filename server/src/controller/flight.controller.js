const createFlightService = require("../services/flight/flight.service");

exports.createFlightController = async (req, res, next) => {
  const {
    flightName,
    flightNumber,
    passenger_info,
    airline,
    from,
    to,
    departure,
    arrival,
    duration,
    bookedseat,
    price,
    payment,
  } = req.body;
  try {
    const result = await createFlightService({
      flightName,
      flightNumber,
      passenger_info,
      airline,
      from,
      to,
      departure,
      arrival,
      duration,
      bookedseat,
      price,
      payment,
    });
    res.status(201).json(result);
  } catch (error) {
    const err = {
      status: 500,
      message: "Internal server error",
    };
    console.error(error);
    next(err);
  }
};
