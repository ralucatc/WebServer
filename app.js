const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.listen(3000, () => {
  console.log("Server started and is listening on port 3000");
});

app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/running", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/running", (req, res) => {
  var subName = req.body.yourname;
  var subEmail = req.body.youremail;
  res.send(
    "Hello " + subName + ", Thank you for subcribing. You email is " + subEmail
  );
});

function return404WhenMaintanceMode() {
  app.post("/maintenance", (req, res) => {
    res.send("Sorry, server is in maintenance.");
  });
}
