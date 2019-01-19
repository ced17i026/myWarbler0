require("dotenv").config();
const express = require("express"),
    app = express(),
    cors = require("cors"),
    bodyParser = require("body-parser"),
    authRoutes = require("./routes/authRoutes"),
    authorize = require("./middleware/authenticate"),
    messageRoutes = require("./routes/messageRoutes"),
    error = require("./handlers/error");

app.use(bodyParser.json());
app.use(cors());
app.use("/api/user/",authRoutes);
app.use("/api/user/:id/message",
authorize.isAuthenticated,authorize.isAuthorize,messageRoutes);
app.use(error);
app.listen(3001,function(){
    console.log("Server is running...");
})