const res = require('express/lib/response');
const homeRouter = require('./home');
const courseRouter = require('./course');
const meRouter = require('./me');
function route(app) {
    app.use('/courses', courseRouter);
    app.use('/me', meRouter);
    app.use('/', homeRouter);
}

module.exports = route;
