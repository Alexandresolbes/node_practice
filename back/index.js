const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

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
  console.log("❌🆘 Connection to the database failed 🆘❌ ");
  console.log(err);
});


//app = nom de l'application express ligne 5
//GET nom de la fonction de l'application qui fait le liens entre la route et la fonction
// param1 est l'url du endpoint
// param2 la fonction a executer quand le endpoint recoi un truc
app.get("/api",  (req, res) => {
  console.log("je suis ici");
  res.send("je suis la");
});

//app = nom de l'application express ligne 5
//GET nom de la fonction de l'application qui fait le liens entre la route et la fonction
// param1 est l'url du endpoint
// param2 la fonction a executer quand le endpoint recoi un truc
app.put("/api",  (req, res) => {
  console.log(req.body.id);
  res.send("je suis la");
});

//app = nom de l'application express ligne 5
//GET nom de la fonction de l'application qui fait le liens entre la route et la fonction
// param1 est l'url du endpoint
// param2 la fonction a executer quand le endpoint recoi un truc
app.post("/api",  (req, res) => {
  console.log("je suis ici");
  res.send("je suis la");
});

//app = nom de l'application express ligne 5
//GET nom de la fonction de l'application qui fait le liens entre la route et la fonction
// param1 est l'url du endpoint
// param2 la fonction a executer quand le endpoint recoi un truc
app.delete("/api",  (req, res) => {
  console.log("je suis ici");
  res.send("je suis la");
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
