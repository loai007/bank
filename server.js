const express = require("express");
const app = express();
const api = require("./server/routes/api");
const path = require("path");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/Bank");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );

  next();
});
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const port = 5000;
app.listen(port, function () {
  console.log(`Server running on ${port}`);
});

app.use("/", api);
