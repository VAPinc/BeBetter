var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
//app.use(express.static(__dirname + "/public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
// app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//app.use('/js',express.static(path.join(__dirname, 'public/js')));
//app.use('/css',express.static(path.join(__dirname, 'public/css')));
//app.use('/assets',express.static(path.join(__dirname, 'public/assets')));
app.use('/js',express.static('public/js'));
//app.use(express.static('public'));

// handlebars.registerHelper('ifEquals', function(arg1, arg2, options) {
//   return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
// });


// Import routes and give the server access to them.
var routes = require("./controllers/bb_controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
