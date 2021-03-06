const mongoose=require('mongoose')

const bcrypt=require('bcrypt')

const LearnerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

LearnerSchema.pre('save',function(next){
    const saltRounds=10
    this.password=bcrypt.hashSync(this.password,saltRounds)
    next()
})

//exporting schema
module.exports=mongoose.model("learner",LearnerSchema)