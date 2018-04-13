const Internship            = require('../internship/internship');
const CompanyFactory        = require('../company/company-factory');
const LecturerFactory       = require('../lecturer/lecturer-factory');

class InternshipFactory {
    constructor(app) {
        this.app = app;
    }
    /**
     *
     * @param raw
     * @param {Course} course
     * @return {Internship}
     */
    makeFromDB(raw,course) {
        let company = new CompanyFactory();
        let lecturerFactory = new  LecturerFactory();
        let lecturer;
        lecturer = lecturerFactory.makeFromDB(raw);
        let internship = new Internship(company.makeFromDB(raw));

        internship.setId(raw.internship_id);
        internship.setCourse(course);
        return internship;
    }
}

module.exports = InternshipFactory;
