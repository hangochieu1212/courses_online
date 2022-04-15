const Course = require('../models/Course');
class HomeController {
    index(req, res, next) {
        Course.find({})
            .lean()
            .then(function (courses) {
                res.render('home', {
                    courses: courses,
                });
            })
            .catch(next);
    }
}

module.exports = new HomeController();
