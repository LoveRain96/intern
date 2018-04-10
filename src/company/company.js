class Company {

    constructor(name) {
        this.name = name;
    }
    /**
     *
     * @param {int} id
     */
    setId(id) {
        this.id = id;
    }

    /**
     *
     * @return {int}
     */
    getId() {
        return this.id;
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

}

module.exports = Company;
