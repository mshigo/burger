var express = require("express");
var handlebars = require("express-handlebars");

var PORT = process.env.PORT || 3000;

var app = express();
app.use(express.static("public"));
//body parser
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
//set handlebars
app.engine("handlebars", handlebars({ defaultLayout: "main"}));
app.set("view engine", "handlebars");
//route imports
var routes = require("./controllers/burgers_controllers");
app.use(routes);

app.listen(PORT, function() {
    console.log("Listening on PORT: " + PORT);
});