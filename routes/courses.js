const express=require('express')
const router=express.Router()
const courseController=require('../controllers/courses')

//create
router.post('/create',courseController.createCourse)
//read
router.get('/getAllCourse',courseController.readAllcourse)
//Read By ID
router.get('/getCourseById/:course_id',courseController.readCourseById)
//read by Name
router.get('/getCourseById/:course_id',courseController.readCourseByName)
//update course by Id
router.put('/updateCourseById/:course_id',courseController.updateCourseById)
//delet course by iD
router.delete('/deleteCourseById/:course_id',courseController.deleteCourseById)

module.exports=router