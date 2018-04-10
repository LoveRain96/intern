const status = require('../statuses');

class CourseRepository {
    constructor(connection, courseFactory) {
        this.connection = connection;
        this.courseFactory = courseFactory;
    }

    all() {
        return this.connection('courses')
            .where({deleted_at: null, status: status.OPEN})
            .then(courses =>courses.map(this.courseFactory.makeFromDB));
    }

    get(id) {
        return this.connection('courses')
            .where({id : id, deleted_at : null})
            .then(result=> this.courseFactory.makeFromDB(result[0]))
    }

    create(course) {
        return this.connection('courses').insert({
            name : course.getName(),
            startDate : course.getDuration().getStartDate(),
            endDate : course.getDuration().getEndDate(),
            status : status.OPEN
        }).then(course_id=> {
            course.setId(course_id);
            return course;
        })
    }

    update(course) {
        return this.connection('courses').update({
            name : course.getName(),
            startDate : course.getDuration().getStartDate(),
            endDate : course.getDuration().getEndDate(),
            status : course.getStatus()
        }).where('id', course.getId())
    }

    remove(id) {
        return this.connection('courses').update({
            deleted_at : new Date().toLocaleString()
        }).where('id', id)
    }
}
module.exports = CourseRepository;