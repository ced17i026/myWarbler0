const express = require("express"),
    app = express.Router({mergeParams:true}),
    message = require("../handlers/message");


app.post("/",message.createMessage)
    .get("/",message.fetchMessages);
module.exports = app;