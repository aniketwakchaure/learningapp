const CourseModel =require('../models/courses')

//create course
const createCourse=async(req,res,next)=>{
    let {course_id,course_name,course_description}=req.body
    await CourseModel.create({
        course_id,
        course_name,
        course_description
    },(err,result)=>{
        if(err)
        next(err)
        res.json({
            status:"Success",
            message:"Course added succesfully",
            data:result
        })
    })
}

const readAllcourse=(req,res,next)=>{
    CourseModel.find({},(err,result)=>{
        if(err)
        next(err)
        res.json({
            status:"Success",
            message:"Successfully Reading all courses",
            data:{
                course:result 

            }
        })
    })
}

//Read By ID
const readCourseById=(req,res,next)=>{
    CourseModel.findById(req.params.id,(err,result)=>{
        if(err)
        next(err)
        res.json({
            status:"Success",
            message:"Successfully read courses by ID",
            data:{
                course:result 
            }
        })
    })
}


const readCourseByName=(req,res,next)=>{
    CourseModel.findById(req.params.course_name,(err,result)=>{
        if(err)
        next(err)
        res.json({
            status:"Success",
            message:"Successfully read course by Name",
            data:{
                course:result 
            }
        })
    })
}

//Update course by ID
const updateCourseById=(req,res,next)=>{
    CourseModel.findByIdAndUpdate(req.params.id,req.body,(err,result)=>{
        if(err)
        next(err)
        res.json({
            status:"Success",
            message:"Successfully update course by Id",
            data:{
                course:result
            }
        })
    })
}
const deleteCourseById=(req,res,next)=>{
    CourseModel.findByIdAndRemove(req.params.id,(err,result)=> {
        if(err)
        next(err)
        res.json({
            status:"Success",
            message:"Successfully deleted course by ID",
            data:{
                course:result 
            }
        })
    })
}

module.exports={createCourse,readAllcourse,readCourseById,readCourseByName,updateCourseById,deleteCourseById}