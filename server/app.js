require("dotenv").config();
const express = require("express"),
    app = express(),
    cors = require("cors"),
    bodyParser = require("body-parser"),
    authRoutes = require("./routes/authRoutes"),
    messageRoutes = require("./routes/messageRoutes"),
    error = require("./handlers/error");

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use("/api/user/",authRoutes);
app.use("/api/user/message",messageRoutes);
app.use(error);
app.listen(3001,function(){
    console.log("Server is running...");
})