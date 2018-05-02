const CourseFactory = require('../course-factory');

class Searcher {
    /**
     *
     * @param connection
     * @param {CourseFactory}factory
     */
    constructor(connection, factory) {
        this.connection = connection;
        this.factory = factory
    }

    search(condition) {
        let sqlQuery;
        let factory = this.factory;
        sqlQuery = this.connection
        //lecture, intern, company, internship, registration
            .select('courses.id', 'courses.name', 'courses.startDate', 'courses.endDate', 'courses.status',
                'lecturers.code as lecturers-code', 'lecturers.name as lecturers-name','lecturers.gender as lecturers-gender',
                'lecturers.phone as lecturers-phone', 'lecturers.email as lecturers-email', 'lecturers.address as lecturers-address',
                'interns.code as interns-code', 'interns.lastName as interns-lastName', 'interns.firstName as intern-firstName',
                'interns.gender as interns-gender', 'interns.phone as interns-phone', 'interns.phoneParent as interns-phoneParent',
                'interns.email as interns-email', 'interns.address as interns-address',
                'companies.name as companies-name', 'companies.phoneManager as companies-phoneManager', 'companies.emailManager as companies-emailManager',
                'companies.address as companies-address', 'companies.nameManager as companies.nameManager',
                ''
                )
    }

}

module.exports = Searcher;