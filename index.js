var express = require("express");
var app = express();

app.listen(3000, function() {
  console.log("Listening on port 3000!");
});

app.get("/", function(req, res) {
  res.send("Hello from 10:07 EDT! (: ");
});
