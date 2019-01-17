const express = require("express"),
    app = express.Router();


app.get("/",function(req,res){
    res.send("This is message route");
})
module.exports = app;