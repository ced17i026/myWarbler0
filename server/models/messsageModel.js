const mongoose = require("mongoose"),
    users = require("./userModels");
const messageSchema = new mongoose.Schema({
    text:{
        type:String,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
})

messageSchema.pre("remove",async function(next){
    try{
        let user = await users.findById(this.user);
        user.message.remove(this._id);
        await user.save();
        return next();
    }catch(err){
        return next(err);
    }
})
module.exports = mongoose.model("messages",messageSchema);