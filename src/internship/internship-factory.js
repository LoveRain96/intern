const Internship = require('../../src/internship/internship');
const CompanyFactory = require('../../src/company/company-factory');
class InternshipFactory {
    /**
     *
     * @param raw
     * @param {Course} course
     * @return {Internship}
     */
    makeFromDB(raw,course) {
        let company = new CompanyFactory();
        let internship = new Internship(company.makeFromDB(raw));
        internship.setId(raw.internship_id);
        internship.setCourse(course);
        return internship;
    }
    makeFrom(raw) {
        let company = new CompanyFactory();
        let internship = new Internship(company.makeFromDB(raw));
        internship.setId(raw.internship_id);
        return internship;
    }
}
module.exports = InternshipFactory;