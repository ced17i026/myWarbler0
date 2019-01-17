const express = require("express"),
    app = express(),
    cors = require("cors"),
    bodyParser = require("body-parser"),
    authRoutes = require("./routes/authRoutes"),
    messageRoutes = require("./routes/messageRoutes");

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use("/api/user/",authRoutes);
app.use("/api/user/message",messageRoutes);

app.listen(3001,function(){
    console.log("Server is running...");
})