const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    text:{
        type:String,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
})

module.exports = mongoose.model("messages",messageSchema);