const express = require("express"),
    app = express.Router();


app.get("/",function(req,res){
    res.send("This is auth route");
})
module.exports = app;