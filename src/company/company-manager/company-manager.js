class CompanyManager {
    constructor(name) {
        this.name = name;
    }
    /**
     *
     * @param {int}id
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
     * @param {Company} company
     */
    setCompany(company) {
        this.company = company;
    }
    /**
     *
     * @return {Company}
     */
    getCompany() {
        return this.company;
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
     * @param {string}address
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

module.exports = CompanyManager;
