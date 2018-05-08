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
            .select( 'companies.id', 'companies.name', 'companies.phoneManager', 'companies.emailManager', 'companies.nameManager', 'companies.address',
                'internships.id as internship_id','internships.deadline', 'lecturers.code', 'lecturers.name as lecturer_name', 'lecturers.gender', 'lecturers.phone', 'lecturers.email', 'lecturers.address as lecturer_address')
            .from('internships')
            .leftJoin('companies', function () {
                    this.on('companies.id', '=', 'internships.company_id')
            })
            .leftJoin('lecturers', function () {
                    this.on('lecturers.code', '=', 'internships.lecturer_code')
            }).where('internships.course_id', course.getId())
            .then(results => results.map(this.internshipFactory.makeFromDB));
    }
    create(internship) {
        return this.connection('internships').insert({
            startDate : internship.getStartDate(),
            endDate : internship.getEndDate(),
            course_id : internship.getCourse().getId(),
            company_id : internship.getCompany().getId(),
            lecturer_code : internship.getLecturer().getCode(),
            status : status.OPEN
        })
    }
    update(internship) {
        return this.connection('internships').update({
            startDate : internship.getStartDate(),
            endDate : internship.getEndDate(),
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
    removeByCourse(course_id) {
        return this.connection('internships').update({
            deleted_at : new Date().toLocaleDateString()
        }).where('course_id', course_id)
    }
    all() {
        return this.connection
            .select( 'companies.id', 'companies.name', 'companies.phoneManager', 'companies.emailManager', 'companies.nameManager', 'companies.address',
                'internships.id as internship_id','internships.deadline', 'lecturers.code', 'lecturers.name as lecturer_name', 'lecturers.gender', 'lecturers.phone', 'lecturers.email', 'lecturers.address as lecturer_address')
            .from('internships')
            .leftJoin('companies', function () {
                this.on('companies.id', '=', 'internships.company_id')
            })
            .leftJoin('lecturers', function () {
                this.on('lecturers.code', '=', 'internships.lecturer_code')
            }).where('internships.deleted_at', null)
            .then(results => results.map(this.internshipFactory.makeFromDB));

    }
    get(id,course) {
        return this.connection
            .select( 'companies.id', 'companies.name', 'companies.phoneManager', 'companies.emailManager', 'companies.nameManager', 'companies.address',
                'internships.id as internship_id','internships.deadline', 'lecturers.code', 'lecturers.name as lecturer_name', 'lecturers.gender', 'lecturers.phone', 'lecturers.email', 'lecturers.address as lecturer_address')
            .from('internships')
            .leftJoin('companies', function () {
                this.on('companies.id', '=', 'internships.company_id')
            })
            .leftJoin('lecturers', function () {
                this.on('lecturers.code', '=', 'internships.lecturer_code')
            })
            .where('internships.id', id).where('internships.course_id', course.getId())
            .where('internships.deleted_at', null)
            .then(results => results.map(this.internshipFactory.makeFromDB));
    }
}

module.exports = InternshipRepository;
