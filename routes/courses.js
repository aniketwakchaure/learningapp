const express=require('express')
const router=express.Router()
const courseController=require('../controllers/courses')

//create
router.post('/create',courseController.createCourse)
//read
router.get('/getAllCourse',courseController.readAllcourse)
//Read By ID
router.get('/getCourseById/:id',courseController.readCourseById)
//read by Name
router.get('/getCourseByName/:course_name',courseController.readCourseByName)
//update course by Id
router.put('/updateCourseById/:id',courseController.updateCourseById)
//delet course by iD
router.delete('/deleteCourseById/:id',courseController.deleteCourseById)

module.exports=router