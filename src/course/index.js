const CourseRepository = require('./course-repository');
const CourseFactory    = require('./course-factory');

module.exports = function(app) {
    let connection = app.get('databaseConnection');
    app.set('course.factory', new CourseFactory());
    app.set('course.repository', new CourseRepository(connection, new CourseFactory()));
};