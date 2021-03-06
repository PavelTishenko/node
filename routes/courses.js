const { Router } = require('express');
const router = Router();
const Courses = require('../models/course')

router.get('/', async (req, res) => {
    const courses = await Courses.getAll();
    res.render('courses', {
        title: 'Courses',
        isCourses: true,
        courses
    })
})

router.get('/:id',async (req, res) => {
    const course = await Courses.getById(req.params.id)
    res.render('course', {
        layout: 'empty',
        title: `Course ${course.title}`,
        course
    })
})


module.exports = router;