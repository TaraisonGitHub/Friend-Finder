
//Dependencies==================================================================

var express = require('express');
var bodyParser =require('body-parser');
var path = require('path');

var app = express();
var PORT = 8010;

//Routes=========================================================================
app.get("/survey", function(req, res) {
    res.send("I am bob");
    //res.send is equivilant to the normal res.end

    //the function used in this is called a route handler (function(req,res))
});
app.use("/home", function(req, res) {
	res.send("back to the home page");
});

app.listen(PORT, function() {
	console.log("App listening on port:" + PORT);
});




