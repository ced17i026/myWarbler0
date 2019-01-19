require("dotenv").load();
const jwt = require("jsonwebtoken");
exports.isAuthenticated = async function(req,res,next){
    try{
        let token = req.headers.authorization.split(" ")[1];
        jwt.verify(token,process.env.SECRET_KEY,function(err,decoded){
            if(decoded){
                return next();
            }else{
                return next({
                    status: 401,
                    message: "Please LogIn First",
                })
            }
        });
    }catch(err){
        return next({
            ...err,
            status: 400,
            message: "Unable to LogIn",
        })
    }
}

exports.isAuthorize = async function(req,res,next){
    try{
        let token = req.headers.authorization.split(" ")[1];
        jwt.verify(token,process.env.SECRET_KEY,function(err,decoded){
            if(decoded&&decoded._id === req.params.id){
                return next();
            }else{
                return next({
                    status: 401,
                    message: "Unauthorize"
                })
            }
        })
    }catch(err){
        return next({
            ...err,
            status: 401,
            message: "Unauthorize",
        })
    }
}