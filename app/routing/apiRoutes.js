//Dependencies ==========================
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = 9000;

var theOtherJS = require('./apiRoutes.js');//(app);

// apiRoutes.js
module.exports = function(theOtherJS) {
  app.get("/api/friends", function(req, res) {
  	res.send(theOtherJS);
  });

  app.get("/api/about/:lookup", function(req, res) {
    res.send(me.indexOf(req.params.lookup).toString());
  });
}

//this is just the code for the api route

//modules.exports


app.listen(PORT, function() {
  console.log("App listening on port:" + PORT);
});

/*
app.post("api/new", function(req, res) {
	var newcharacter = req.body;

	console.log(newcharacter);

	characters.push(newcharacter);

	res.json(newcharacter);
});
*/