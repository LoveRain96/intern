const Lecturer = require('./lecturer');
const Contact  = require('../contact/contact');
class lecturerFactory {

    /**
     *
     * @param raw
     * @return {Lecturer}
     */
    makeFromDB(raw) {
        let lecturer = new Lecturer();
        let contact = new Contact();
        lecturer.setId(raw.id);
        lecturer.setName(raw.name);
        lecturer.setSex(raw.sex);
        lecturer.setAddress(raw.address);
        contact.setPhone(raw.phone);
        contact.setEmail(raw.email);
        lecturer.setContact(contact);
        return lecturer;
    }
}
module.exports = lecturerFactory;