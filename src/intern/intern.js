class Intern {
    constructor(code) {
        this.code = code;
    }

    /**
     *
     * @param {string} code
     */
    setCode(code) {
        this.code= code;
    }

    /**
     *
     * @param {string}phoneParent
     */
    setPhoneParent(phoneParent) {
        this.phoneParent = phoneParent
    }

    /**
     *
     * @return {string}
     */
    getPhoneParent() {
        return this.phoneParent;
    }
    /**
     *
     * @param {string}lastName
     */
    setLastName(lastName) {
        this.lastName = lastName
    }

    /**
     *
     * @return {string}
     */
    getLastName() {
        return this.lastName;
    }

    /**
     *
     * @param {string} firstName
     */
    setFirstName(firstName) {
        this.firstName = firstName;
    }

    /**
     *
     * @return {string}
     */
    getFirstName() {
        return this.firstName;
    }
    /**
     *
     * @param {string} gender
     */
    setGender(gender) {
        this.gender = gender;
    }

    /**
     *
     * @return {string}
     */
    getGender() {
        return this.gender;
    }
    /**
     *
     * @return {string}
     */
    getCode() {
        return this.code;
    }

    /**
     *
     * @param {string} phone
     */
    setPhone(phone) {
        this.phone = phone;
    }

    /**
     *
     * @return {string}
     */
    getPhone() {
        return this.phone;
    }

    /**
     *
     * @param {string} email
     */
    setEmail(email) {
        this.email = email
    }

    /**
     *
     * @return {string}
     */
    getEmail() {
        return this.email;
    }

    /**
     *
     * @param {string} address
     */
    setAddress(address) {
        this.address = address;
    }

    /**
     *
     * @return {string}
     */
    getAddress() {
        return this.address;
    }
}


module.exports = Intern;
