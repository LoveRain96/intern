const InternList        = require('./intern-list');
class InternListFactory {
    constructor(app) {
        this.app = app;
    }
    get(id) {

    }

    make(raw) {
        let registrationProvider    = this.app.get('internshipRegistration.provider');
        let lecturerFactory     = this.app.get('lecture.factory');
        let lecturer            = lecturerFactory.makeFromDB(raw);
        let listConfirmed       = registrationProvider.getCONFIRMED(raw.internship_id);
        let internList          = new InternList(lecturer, listConfirmed);

    }

}

module.exports = InternListFactory;