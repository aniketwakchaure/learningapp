const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const app = express()

const learnerRoute =require('./routes/learners')
const courseRoute = require('./routes/courses')

const port = process.env.PORT||5000;

const mongoose = require('mongoose')

require('dotenv').config();
const jwt = require ('jsonwebtoken')
app.set('secretKey','lksdhsdhsb');

//function for validation of user credentials
const userValidation =  (req,res,next)=>{
    jwt.verify(req.headers['x-access-token'],app.get('secretKey'),
    (err,decoded)=>{
        if(err){
            res.json({
                message:err 
            })
        }
        next()
    })
}

app.use(logger('dev'))
app.use(bodyParser.json())
app.use('/learner',learnerRoute)

app.use('/courses',userValidation,courseRoute)

//homepage request
app.get('/',(req,res)=>{
    res.json({
        "App":"JWT Based API Application",
        "message":"Successfully Running the Application"
    })
})

const mongoURI="mongodb+srv://aniketdb:aniket0160@cluster1.ig5p0.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoURI)
.then(()=>{
    console.log("Succesfully connected to the database")
})
.catch((err)=>{
    console.log(err)
})
app.listen(port||80,()=>{
    console.log("Successfully Running on the POrt: 5000")
})