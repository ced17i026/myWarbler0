const mongoose = require("mongoose"),
    bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:email,
        required:true,
        unique: true,
    },
    password:{
        type:String,
        required:true,
    }
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