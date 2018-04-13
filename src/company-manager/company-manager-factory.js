const CompanyManger  = require('./company-manager');
const Contact        = require('../contact/contact');
const CompanyFactory = require('../company/company-factory');

class CompanyManagerFactory {
    constructor(app) {
        this.app    = app
    }
    /**
     *
     * @param raw
     * @return {CompanyManager}
     */
    makeFromRequest(raw) {
        let companyProvider  = this.app.get('company.provider');
        return companyProvider.provide(raw.company_id).then(company => {
            let companyManager = new CompanyManger(company, raw.name);
            companyManager.setGender(raw.gender);
            let contact = new Contact();
            companyManager.setAddress(raw.address);
            contact.setPhone(raw.phone);
            contact.setEmail(raw.email);
            companyManager.setContact(contact);
            return companyManager;
        })
    }

    makeFromDB(raw) {
        let factory = new CompanyFactory();
        let company = factory.makeFromDB(raw);
        company.setId(raw.company_id);
        let companyManager = new CompanyManger(company, raw.name);
        companyManager.setGender(raw.gender);
        let contact = new Contact();
        companyManager.setAddress(raw.address);
        contact.setPhone(raw.phone);
        contact.setEmail(raw.email);
        companyManager.setContact(contact);
        return companyManager;
    }
}
module.exports = CompanyManagerFactory;