//jshint esversion:6

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  //   console.log("Post requested recived!");
  const query = req.body.cityName;
  const apiKey = "a94fcccf9438b12e06604d4e10585d71";
  const unit = "metric";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=" +
    apiKey +
    "&units=" +
    unit;

  https.get(url, function (response) {
    // console.log(response);
    console.log(response.statusCode);

    response.on("data", function (data) {
      //   console.log(data);
      const weatherData = JSON.parse(data);
      //   console.log(weatherData);
      const temp = weatherData.main.temp;
      //   console.log(temp);
      const weatcherDescription = weatherData.weather[0].description;
      //   console.log(weatcherDescription);
      const icon = weatherData.weather[0].icon;
      //   console.log(icon);

      const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      //   console.log(imageUrl);

      res.write("<p>The weather is currently " + weatcherDescription + " </p>");
      res.write(
        "<h1>The temperature in " +
          query +
          " is " +
          temp +
          " degrees Celcius.</h1>"
      );
      res.write("<img src=" + imageUrl + ">");
      res.send();
    });
  });
  //   res.send("Server is up to running!!");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});

// API Key:
// a94fcccf9438b12e06604d4e10585d71
