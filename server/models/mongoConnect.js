const mongoose = require("mongoose");

//connecting to mongoose
mongoose.connect("mongodb://localhost/warbler0");
mongoose.set("debug",true);
mongoose.Promise = Promise;

// module.exports.user = require("./userModels");
// module.exports.messages = require("./messsageModel");

module.exports = {
    user: require("./userModels"),
    messages: require("./messsageModel"),
}