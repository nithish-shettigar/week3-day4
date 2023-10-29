// const express = require("express");
// const router = express.Router();

// const StudentController = require("../Controllers/studentController");

// router.post("/register",StudentController.createStudent);

// module.exports = router;

const express=require("express");
const router=express.Router();

const CourseController=require("../Controllers/courseController")
router.post("/register",CourseController.createCourse);
module.exports=router;