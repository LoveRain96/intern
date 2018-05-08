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
                .then(result=> result.map(this.courseFactory.makeFromDB));
    }
    searchByName(name) {
        return this.connection('courses')
            .where({deleted_at : null}).where('name', 'like', '%' + name + '%')
                .then(result=> result.map(this.courseFactory.makeFromDB));
    }

    create(course) {
        return this.connection('courses').insert({
            name : course.getName(),
            startDate : course.getStartDate(),
            endDate : course.getEndDate(),
            status : status.OPEN
        }).then(course_id=> {
            course.setId(course_id[0]);
            course.setStatus(status.OPEN);
            return course;
        })
    }

    update(course) {
        return this.connection('courses').update({
            name : course.getName(),
            startDate : course.getStartDate(),
            endDate : course.getEndDate(),
            status : course.getStatus()
        }).where('id', course.getId()).then(() => course)
    }

    remove(id) {
        return this.connection('courses').update({
            deleted_at : new Date().toLocaleString()
        }).where('id', id).then(() => id)
    }
}
module.exports = CourseRepository;