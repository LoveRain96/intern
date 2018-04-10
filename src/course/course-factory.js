const Course = require('./course');
const Duration = require('../duration/duration');
class CourseFactory {

    /**
     *
     * @param raw
     * @return {Course}
     */
    makeFromDB(raw) {
        let duration = new Duration(raw.startDate, raw.endDate);
        let course = new Course(duration, raw.name);
        course.setId(raw.id);
        course.setStatus(raw.status);
        return course;
    }

    /**
     *
     * @param raw
     * @return {Course}
     */
    makeFromRequest(raw) {
        let duration = new Duration(raw.body.startDate, raw.body.endDate);
        let course = new Course(duration, raw.body.name);
        course.setId(raw.params.id);
        return course;
    }

}
module.exports = CourseFactory;