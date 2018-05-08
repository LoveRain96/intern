const InternshipFactory = require('../internship-factory');


class Searcher {
    /**
     *
     * @param  connection
     * @param {InternshipFactory}factory
     */
    constructor(connection, factory) {
        this.connection = connection;
        this.factory    = factory;
    }

    search(condition) {
        let sqlQuery;
        let factory = this.factory;
        sqlQuery = this.connection
            .select('courses.id', 'courses.name as courses-name', 'courses.startDate', 'courses.endDate', 'courses.status',
                'companies.id', 'companies.name as companies-name', 'companies.phoneManager ', 'companies.emailManager', 'companies.address as companies-address','companies.nameManager ' ,
                'lecturers.code', 'lecturers.name as lecturers-name', 'lecturers.gender', 'lecturers.phone as lecturers-phone', 'lecturers.email as lecturers-email', 'lecturers.address as lecturers-address'
                ,'internships.deadline')
            .from('internships')
            .leftJoin('courses', function () {
                this.on('courses.id', '=', 'internships.course_id' )
            })
            .leftJoin('companies', function () {
                this.on('companies.id', '=', 'internships.company_id')
            })
            .leftJoin('lecturers', function () {
                this.on('internships.lecturer_code', '=', 'lecturers.code')
            });
        condition.describe(sqlQuery);
        return sqlQuery.then(results => {
            return results.map(element => CourseFactory.makeFromDB(element));
        });
    }


}

module.exports = Searcher;
