//jshint esversion:6

const express = require("express");
const app = express();

app.get("/", function (request, response) {
  //   console.log(request);
  response.send("Hello World");
});

app.get("/contact", function (req, res) {
  res.send("Contact me at: afsar291722@gmail.com");
});

app.get("/about", function (req, res) {
  res.send("I'm Md. Afsar Hossain");
});

app.get("/hobbies", function (req, res) {
  res.send("<ul><li>Code</li><li>Movie</li><li>Play</li></ul>");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
