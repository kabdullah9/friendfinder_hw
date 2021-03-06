var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')

var app = express()
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routs = require("./app/routing/htmlRoutes")(app);
var apiroutes = require("./app/routing/apiRoutes")(app);


app.listen(PORT, function () {
    console.log(PORT);
});

