const express = require("express"),
    app = express.Router({mergeParams:true}),
    message = require("../handlers/message");


app.post("/",message.createMessage)
    .get("/",message.fetchMessages);
//delete route
app.delete("/:m_id",message.deleteMessage);
module.exports = app;