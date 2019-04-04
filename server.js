var express= require('express');
var path = require('path');
var cors = require('cors');

var app = express();


var port = process.env.PORT || 3001;


app.get("/hi", cors(), function(req, res, next){
    res.send("hi");
});

app.listen(port, function(err){
    if(!err){
        console.log("Server Started on");
        console.log(port);
    }
});