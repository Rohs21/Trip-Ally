const joi = require('joi')

const signupValidation = (req,res,next)=>{
    const schema = joi.object({
        name: joi.string().min(3).max(100).required(),
        email: joi.string().email().required(),
        password: joi.string().min(4).max(100).required()
    })
}

const {error} = schema.validate(req.body);
