const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { url } = require("inspector");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const adresseBdd = "mongodb+srv://alexandresolbes:dipdip77@cluster0.yicncsb.mongodb.net/";

mongoose.connect(adresseBdd, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("⚡⚡ Connected to the database !! ⚡⚡");
})
.catch((err) => {
  console.log("❌🆘 Connection to the database failed miserably 🆘❌ ");
  console.log(err);
});

app.post()

const planetSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  mass: Number ,
  radiu: Number,
  distance: Number,
  composition: String,
  image: String,
  description: String,
});

const Planet = mongoose.model('Mars', planetSchema);

const mars = new Planet ({
  name: mars,
  mass: 10000,
  radius: 3396,
  composition: "sand",
  description: "sandy planet"
})

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
