const db = require("../models/mongoConnect");

exports.createMessage = async function(req,res,next){
    try{
        const message = await db.messages.create({
            text: req.body.text,
            user: req.params.id,
        });
        const user = await db.user.findById(req.params.id);
        user.message.push(message.id);
        await user.save();
        let foundMessage = await db.messages.findById(message.id).populate("user",{
            username:true,
        })
        return res.status(200).json(foundMessage);
    }catch(err){
        return next({
            ...err,
            stauts:400,
            message: "Problem in Creating Message",
        })
    }
}

exports.fetchMessages = async function(req,res,next){
    try{
        let messages = await db.messages.find().populate("user",{
            username:true,
        });
        return res.status(200).send(messages);
    }catch(err){
        return next({
            ...err,
            status: 400,
            message: "Problem in fetching messages"
        })
    }
}