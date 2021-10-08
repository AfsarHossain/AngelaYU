//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  //   res.send("Hello World");
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  //   console.log(req.body);
  //   console.log(req.body.num1);

  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);

  let result = num1 + num2;

  //   res.send("Thanks for posting!");

  res.send("The result is : " + result);
});

app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", function (req, res) {
  let weight = parseFloat(req.body.weight);
  let height = parseFloat(req.body.height);

  let bmi = weight / (height * height);

  res.send("BMI is : " + bmi);
});

app.listen(3000, function () {
  console.log("Server in runnig on port 3000.");
});
