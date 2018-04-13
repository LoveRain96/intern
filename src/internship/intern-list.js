class InternList {

    constructor(app) {
        this.app =app;
    }

    getIntern(id) {
        let provider = this.app.get('internshipRegistration.provider');
        return provider.getCONFIRMED(id);
    }

}

module.exports = InternList;
