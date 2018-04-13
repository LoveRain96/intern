class Lecturer {
    constructor(code) {
        this.code= code
    }

    getCode(){
        return this.code
    }

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
     * @param {string} name
     */
    setName(name) {
        this.name = name;
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
            address : this.getAddress(),
            contact : this.getContact()
        }
    }
}

module.exports = Lecturer;
