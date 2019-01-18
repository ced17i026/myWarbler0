const express = require("express"),
    app = express.Router({mergeParams:true}),
    message = require("../handlers/message");


app.post("/",message.createMessage);
module.exports = app;