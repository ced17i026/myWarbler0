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