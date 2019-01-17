const mongoose = require("mongoose");

//connecting to mongoose
mongoose.connect("mongodb://localhost/warbler0");
mongoose.set("debug",true);
mongoose.Promise = Promise;