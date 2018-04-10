class Intern {
    constructor(code) {
        this.code = code;
    }

    /**
     *
     * @param {string} name
     */
    setName(name) {
        this.name = name;
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
    getName() {
        return this.name;
    }

    /**
     *
     * @param {Contact} contact
     */
    setContact(contact) {
        this.contact = contact;
    }

    /**
     *
     * @return {Contact}
     */
    getContact() {
        return this.contact;
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
    toJson() {
        return {
            id : this.getId(),
            name : this.getName(),
            phone : this.getContact().getPhone(),
            email : this.getContact().getEmail(),
            address : this.getAddress()
        }
    }
}


module.exports = Intern;
