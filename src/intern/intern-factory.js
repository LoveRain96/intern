const Intern = require('./intern');
class InternFactory {

    /**
     *
     * @param raw
     * @return {Intern}
     */
    makeFromDB(raw) {
        let intern = new Intern(raw.code);
        intern.setFirstName(raw.firstName);
        intern.setLastName(raw.lastName);
        intern.setGender(raw.gender);
        intern.setPhoneParent(raw.phoneParent);
        intern.setPhone(raw.phone);
        intern.setEmail(raw.email);
        intern.setAddress(raw.address);
        return intern;
    }
}

module.exports = InternFactory;