const LearnerModel=require('../models/learners')
const bcrypt=require('bcrypt')
const jwt =require ('jsonwebtoken')

const create=(req,res,next)=>{
    const {name,email,password}=req.body

    LearnerModel.create({
        name,
        email,
        password
    },(err,result)=>{
        if(err)
        next(err)
        else
        res.status(200).json({
            status:"Success",
            message:"Learner added successfully",
            data:result
        })
    })
}

const login=(req,res,next)=>{
    LearnerModel.findOne({learner_email:req.body.learner_email},(err,result)=>{
            if(err){
            next(err)
        }
        else{
            if(bcrypt.compare(req.body.password, result.password)){
                const token =jwt.sign({id:result_.id},req.app.get('secretary'),{expiresIn:'1h'})
                res.json({
                    status:"Success",
                    message:"Login Successfully",
                    data:{
                        learner:result,
                        token:token
                    }
                })
            }
        }

    })
}

//exporting functions
module.exports={create,login}
    
