const CompanyManger = require('./company-manager');
const Contact       = require('../../contact/contact');
class CompanyManagerFactory {
    /**
     *
     * @param raw
     * @return {CompanyManager}
     */
    makeFromDB(raw) {
        let companyManager = new CompanyManger(raw.name);
        let contact = new Contact();
        companyManager.setId(raw.id);
        companyManager.setAddress(raw.address);
        contact.setPhone(raw.phone);
        contact.setEmail(raw.email);
        companyManager.setContact(contact);
        return companyManager;
    }
}
module.exports = CompanyManagerFactory;