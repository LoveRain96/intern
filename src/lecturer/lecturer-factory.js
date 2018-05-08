const Lecturer = require('./lecturer');
const Contact  = require('../contact/contact');
class lecturerFactory {

    /**
     *
     * @param raw
     * @return {Lecturer}
     */
    makeFromDB(raw) {
        let lecturer = new Lecturer(raw.code);
        let contact = new Contact();
        lecturer.setName(raw.name);
        lecturer.setGender(raw.gender);
        lecturer.setAddress(raw.address);
        contact.setPhone(raw.phone);
        contact.setEmail(raw.email);
        lecturer.setContact(contact);
        return lecturer;
    }
    internshipMakeFromDB(raw) {
        let lecturer = new Lecturer(raw.code);
        let contact = new Contact();
        lecturer.setName(raw.lecturer_name);
        lecturer.setGender(raw.gender);
        lecturer.setAddress(raw.lecturer_address);
        contact.setPhone(raw.phone);
        contact.setEmail(raw.email);
        lecturer.setContact(contact);
        return lecturer;
    }
}
module.exports = lecturerFactory;