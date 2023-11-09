/* The code you provided is a basic setup for a RESTful API using Express.js and
MongoDB. Here's a breakdown of what each part does: */
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");

const app = express();
const port = 3000;

// Configurations

// MongoDB

const url = "";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

/* The code `const planetSchema = new mongoose.Schema({ ... })` is defining a
schema for the "Planet" collection in the MongoDB database. A schema is a
blueprint for the structure of documents in a collection. In this case, the
schema defines the fields and their types for a planet document. */
const planetSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    mass: { type: Number, required: true },
    radius: { type: Number, required: true },
    distance: { type: Number, required: true },
    composition: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String },
});

/* `const Planet = mongoose.model("Planet", planetSchema);` is creating a model for
the "Planet" collection in the MongoDB database using the Mongoose library. */
const Planet = mongoose.model("Planet", planetSchema);

// Multer

/* The code `const storage = multer.diskStorage({ ... })` is creating a storage
configuration for Multer, a middleware used for handling file uploads in
Node.js. */
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "PlanetImages");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

/* `const upload = multer({ storage: storage });` is creating an instance of the
Multer middleware with the specified storage configuration. Multer is a
middleware used for handling file uploads in Node.js. In this case, it is
configured to use the `storage` object defined earlier, which specifies the
destination folder and filename for uploaded files. */
const upload = multer({ storage: storage });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Routes

/* The code `app.post("/planets", upload.single("image"), (req, res) => { ... })`
is defining a route for creating a new planet in the database. When a POST
request is made to the "/planets" endpoint, the code inside the callback
function will be executed. */
app.post("/planets", upload.single("image"), (req, res) => {
    const planet = new Planet({
        name: req.body.name,
        mass: req.body.mass,
        radius: req.body.radius,
        distance: req.body.distance,
        composition: req.body.composition,
        image: req.file.originalname,
        description: req.body.description,
    });

    planet.save();
});

/* The code `app.get("/planets", (req, res) => { ... })` is defining a route for
retrieving all planets from the database. When a GET request is made to the
"/planets" endpoint, the code inside the callback function will be executed. */
app.get("/planets", (req, res) => {
    Planet.find()
        .then((result) => {
            res.send(result);
        })
        .catch((error) => {
            console.log(error);
            res.send(error);
        });
});

/* The code `app.get("/planets/:id", (req, res) => { ... })` is defining a route
for retrieving a specific planet from the database based on its ID. */
app.get("/planets/:id", (req, res) => {
    Planet.findById(req.params.id)
        .then((result) => {
            res.send(result);
        })
        .catch((error) => {
            console.log(error);
            res.send(error);
        });
});

/* The `app.delete("/planets/:id", (req, res) => { ... })` route is responsible for
deleting a planet from the database based on its ID. */
app.delete("/planets/:id", (req, res) => {
    Planet.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.send(result);
        })
        .catch((error) => {
            console.log(error);
            res.send(error);
        });
});

/* The `app.patch("/planets/:id", upload.single("image"), (req, res) => { ... })`
route is responsible for updating an existing planet in the database. */
app.patch("/planets/:id", upload.single("image"), (req, res) => {
    Planet.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        mass: req.body.mass,
        radius: req.body.radius,
        distance: req.body.distance,
        composition: req.body.composition,
        image: req.file.originalname,
        description: req.body.description,
    })
        .then((result) => {
            res.send(result);
        })
        .catch((error) => {
            console.log(error);
            res.send(error);
        });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
