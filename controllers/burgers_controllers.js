var express = require("express");
var burger = require("../models/burger");
var router = express.Router();

router.get("/", function(req, res){
    burger.all(function(data){
        var hbpsObj = {
            burger: data
        };
        console.log(hbpsObj);
        res.render("index", hbpsObj);
    });
});