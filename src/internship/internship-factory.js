const Internship       = require('../internship/internship');
const CompanyFactory   = require('../company/company-factory');
const LecturerFactory   = require('../lecturer/lecturer-factory');

class InternshipFactory {
    /**
     *
     * @param raw
     * @return {Internship}
     */
     makeFromDB(raw) {
        let company = new CompanyFactory().makeFromDB(raw);
        let lecturer = new LecturerFactory().internshipMakeFromDB(raw);
        let internship = new Internship(company);
        internship.setId(raw.internship_id);
        internship.setDeadline(raw.deadline);
        internship.setLecturer(lecturer);
        return internship;
    }
}

module.exports = InternshipFactory;
