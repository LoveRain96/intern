const Course = require('./course');
class CourseFactory {

    /**
     *
     * @param raw
     * @return {Course}
     */
    makeFromDB(raw) {
        let course = new Course(raw.startDate, raw.endDate, raw.name);
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
        let course = new Course(raw.body.startDate, raw.body.endDate, raw.body.name);
        course.setStatus(raw.body.status);
        course.setId(raw.params.id);
        return course;
    }

}
module.exports = CourseFactory;