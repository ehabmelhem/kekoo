const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
// const cookieParser= require()
app.use(cors());
// app.use(cookieParser());

const mongoose = require("mongoose");
app.use(bodyParser.json());
app.use(express.static("kekoo/build"));


mongoose.connect(
  "mongodb+srv://ehabmelhem:KkgXqeaBKuQ6Wh5J@cluster0.ihjz5.mongodb.net/kekoo",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("we are connected to DB");
});

app.get("/",(req,res)=>{
    res.send("hello kekoo");
})

const port = process.env.PORT || 3002;
//test
app.listen(port, () => {
  console.log("listen on port: ", port);
});
// user: ehabmelhem
// KkgXqeaBKuQ6Wh5J
// 