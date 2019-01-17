const db = require("../models/mongoConnect"),
    jwt = require("jsonwebtoken");
exports.signup = async function(req,res,next){
    try{
        let user = await db.user.create(req.body);
        let{username,email} = user;
        let token = jwt.sign({
            username,
            email
        },process.env.SECRET_KEY);
        return res.status(200).json({
            username,
            email,
            token,
        })
    }catch(err){
        if(err.code === 11000){
            err.message = "Sorry, That username or email is already taken"
        }
        return next({
            ...err,
            status:400,
            message: err.message,
        });
    }
}