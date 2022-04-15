const Course = require('../models/Course');
class CourseController {
    //[GET] courses/show
    show(req, res, next) {
        Course.findById(req.params.id)
            .lean()
            .then(function (course) {
                res.render('courses/show', {
                    course: course,
                });
            });
    }
    //[GET] courses/create
    create(req, res, next) {
        res.render('courses/create');
    }
    //[POST] courses/stored
    stored(req, res, next) {
        const course = new Course(req.body);
        course
            .save()
            .then(function () {
                res.redirect('/');
            })
            .catch(next);
    }
    //[GET] courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .lean()
            .then(function (course) {
                res.render('courses/edit', {
                    course: course,
                });
            })
            .catch(next);
    }
    //[PUT] courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .lean()
            .then(function () {
                res.redirect('/me/stored/courses');
            })
            .catch(next);
    }
    //[DELETE] courses/:id
    destroy(req, res, next) {
        Course.delete({ _id: req.params.id })
            .lean()
            .then(function () {
                res.redirect('/me/stored/courses');
            })
            .catch(next);
    }
    //[PATCH] courses/:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .lean()
            .then(function () {
                res.redirect('back');
            })
            .catch(next);
    }
    destroyForce(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(function () {
                res.redirect('back');
            })
            .catch(next);
    }
    
}

module.exports = new CourseController();
