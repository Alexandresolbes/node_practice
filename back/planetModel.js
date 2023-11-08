const mongoose = require("mongoose")


const planetSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  mass: Number ,
  radius: Number,
  distance: Number,
  composition: String,
  image: String,
  description: String,
});

const Planet = mongoose.model('Planet', planetSchema);

const mars = new Planet({
  name: 'mars',
});

console.log(mars);

mars.save();

export default Planet;
