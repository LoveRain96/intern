const status = require('../../src/statuses');
class InternshipRepository {

    /**
     *
     * @param {Connection} connection
     * @param internshipFactory
     */
    constructor(connection, internshipFactory) {
        this.connection        = connection;
        this.internshipFactory = internshipFactory;
    }
    searchByCourse(course) {
        return this.connection
            .select( 'companies.id', 'companies.name', 'companies.phone', 'companies.email', 'companies.address',
                'internships.id as internship_id')
            .from('internships')
            .leftJoin('companies', function () {
                    this.on('companies.id', '=', 'internships.company_id')
            }).where('internships.course_id', course.getId())
            .then(results => results.map(internship=>
                    this.internshipFactory.makeFromDB(internship, course)
            ));
    }
    create(internship) {
        return this.connection('internships').insert({
            startDate : internship.getDuration().getStartDate(),
            endDate : internship.getDuration().getEndDate(),
            course_id : internship.getCourse().getId(),
            company_id : internship.getCompany().getId(),
            lecturer_code : internship.getLecturer().getCode(),
            status : status.OPEN
        })
    }
    update(internship) {
        return this.connection('internships').update({
            startDate : internship.getDuration().getStartDate(),
            endDate : internship.getDuration().getEndDate(),
            course_id : internship.getCourse().getId(),
            company_id : internship.getCompany().getId(),
            lecturer_code : internship.getLecturer().getCode(),
            status : internship.getStatus()
        }).where({
            id: internship.getId()
        })
    }
    remove(internship_id) {
        return this.connection('internships').update({
            deleted_at : new Date().toLocaleDateString()
        }).where('id', internship_id)
    }
}

module.exports = InternshipRepository;
