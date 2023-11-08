const mongoose = require("mongoose")

const tripSchema = new mongoose.Schema({
  name: String,
  departure: String,
  destination: String,
  departure_date: Number,
  back_date: Number,
  number_passengers: Number,
  ship: String,
  status: String,
  description: String,
});

const Trip = mongoose.model('Trip', tripSchema);

export default Trip;
