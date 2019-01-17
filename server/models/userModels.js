const mongoose = require("mongoose"),
    bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique: true,
    },
    password:{
        type:String,
        required:true,
    },
    message:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"messages",
    }]
})

userSchema.pre("save",async function(next){
    try{
        if(!this.isModified("password")){
            return next();
        }
        else{
            const hashedPassword = await bcrypt.hash(this.password,10);
            this.password = hashedPassword;
            return next();
        }
    }
    catch(err){
        return next(err);
    }
})

userSchema.method.comparePassword = async function(inputPassword,next){
    try{
        let matchPassword = await bcrypt.compare(inputPassword,this.password);
        return matchPassword;
    }catch(err){
        return next(err);
    }
}

module.exports = mongoose.model("user",userSchema);