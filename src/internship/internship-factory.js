const Internship            = require('../internship/internship');
const CompanyFactory        = require('../company/company-factory');
//const InternList            = require('./intern-list');

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
        let company = new CompanyFactory().makeFromDB(raw);
        //let internList = new InternList().getIntern(raw.id);
        let internship = new Internship(company);
        internship.setId(raw.internship_id);
        internship.setCourse(course);
        return internship;
    }
}

module.exports = InternshipFactory;
