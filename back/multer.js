const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");

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

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public");
    },
    filename: (req, file, cb) => {
        cb(null, `toto.${file.mimetype.split("/")[1]}`);
    },
});

const upload = multer({ storage: storage});

app.get("/api",  (req, res) => {
  console.log("je suis ici");
  res.send("je suis la");
});

app.post("/upload", upload.single("toto"), (req, res) => {
  console.log(req.body);
  res.send("ok");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
