const Course = require('../models/Course');
class MeController {
    //[GET] /me/storedCourses
    storedCourses(req, res, next) {
        Course.find()
            .lean()
            .then(function (courses) {
                res.render('me/stored-courses', {
                    courses: courses,
                });
            })
            .catch(next);
    }
    //[GET] /me/trashCourses
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .lean()
            .then(function (courses) {
                res.render('me/trash-courses', {
                    courses: courses,
                });
            });
    }
}
module.exports = new MeController();
