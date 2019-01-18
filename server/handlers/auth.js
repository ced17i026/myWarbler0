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

exports.signin = async function(req,res,next){
    try{
        let {email,password} = req.body;
        let user = await db.user.findOne({email:email});
        var isAuthenticated = await user.comparePassword(password);
        if(isAuthenticated){
            let {_id,username,email} = user;
            let token = jwt.sign({
                _id,
                username,
                email
            },process.env.SECRET_KEY);
            return res.status(200).json({
                _id,
                username,
                email,
                token
            })
        }
        else{
            return next({
                status:400,
                message: "Wrong username or password",
            })
        }
    }catch(err){
        next({
            ...err,
            status:400,
            message: "Not able to Signin",
        })
    }
}