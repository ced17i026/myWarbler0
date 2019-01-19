const express = require("express"),
    app = express.Router({mergeParams:true}),
    auth = require("../handlers/auth");

app.post("/signup",auth.signup);
app.post("/signin",auth.signin);

module.exports = app;