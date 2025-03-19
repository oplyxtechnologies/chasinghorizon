const Flight = require("../../model/flight.model");

async function createFlightService({
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
}) {
  return await Flight.create({
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
}

module.exports = createFlightService;
