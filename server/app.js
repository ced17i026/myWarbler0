const express = require("express"),
    app = express(),
    bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.send("Hello World");
})

app.listen(3001,function(){
    console.log("Server is running...");
})