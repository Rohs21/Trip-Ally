const joi = require('joi')
const jwt = require('jsonwebtoken')
const User = require('../Models/User')

const signupValidation = (req,res,next)=>{
    const schema = joi.object({
        name: joi.string().min(3).max(100).required(),
        email: joi.string().email().required(),
        password: joi.string().min(4).max(100).required()
    })
    
    const {error} = schema.validate(req.body);
    if(error){
        return res.status(400)
        .json({message: "Bad request", error})
    }
    next();
}

const loginValidation = (req,res,next)=>{
    const schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(4).max(100).required()
    })
    
    const {error} = schema.validate(req.body);
    if(error){
        return res.status(400)
        .json({message: "Bad request", error})
    }
    next();
}

const protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
        return res.status(401).json({ message: "Not authorized, no token" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select("-password");

        if (!req.user) {
            return res.status(401).json({ message: "User not found" });
        }

        next();
    } catch (error) {
        return res.status(401).json({ message: "Not authorized, invalid token" });
    }
};



module.exports = {
    signupValidation,
    loginValidation,
    protect  // Export the new protect middleware
}