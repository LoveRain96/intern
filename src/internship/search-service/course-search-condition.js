class CourseSearchCondition {
    constructor(course) {
        this.course = course
    }

    describe(sqlQuery) {
        let course = this.course;
        return sqlQuery.where({
            'courses.id': course,
            'courses.deleted_at' : null

        })
    }
}

module.exports = CourseSearchCondition;
