// Dependencies
require('dotenv').config();
var express = require("express");
var bodyParser = require("body-parser");
var https = require("https");

// Set up express app
var app = express();
var PORT = process.env.PORT || 3000;

// Set up body parser from documentation
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Access static directory
app.use(express.static(__dirname + "/public"));

// Set Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Routes
require("./routes/view.js")(app);

// ping heroku
setInterval(function() {
  https.get("https://markalaniz.herokuapp.com/");
}, 300000);

// Start the server
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});