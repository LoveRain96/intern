const InternFactory = require('../../src/intern/intern-factory');
const InternshipRegistration = require('../../src/internship-registration/internship-registration');
class InternshipRegistrationFactory {

    /**
     *
     * @param raw
     * @return {InternshipRegistration}
     */
    makeFormDB(raw) {
        let internFactory = new InternFactory();
        let intern = internFactory.makeFromDB(raw);
        let internshipRegistration = new InternshipRegistration(intern, raw.status);
        return internshipRegistration;
    }
}
module.exports = InternshipRegistrationFactory;