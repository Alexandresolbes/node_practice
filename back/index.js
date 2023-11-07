const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// DB configuration de la connection a la base de donnée

const adresseBdd = "mongodb+srv://alexandresolbes:dipdip77@cluster0.yicncsb.mongodb.net/";

mongoose.connect(adresseBdd, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connecté à la base de donnée");
    })
    .catch((err) => {
        console.log("Erreur de connection à la base de donnée");
        console.log(err);
    });

// Schema de la base de données

const carSchema = new mongoose.Schema({
  brand: String ,
  year: Number ,
});


const Car = mongoose.model("Car", carSchema);

const small = new Car ({brand: 'Toyota'});

small.save();

app.post("/api/car", (req, res) => {
  const car = new Car({
      brand: req.body.brand,
      year: req.body.year,
  });

  car.save()
      .then(() => {
          res.status(201).json({ message: "Car saved successfully" });
      })
      .catch((error) => {
          res.status(500).json({ error: "Failed to save car" });
      });
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
