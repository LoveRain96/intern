class CompanyManager {
    constructor(company, name) {
        this.name = name;
        this.company = company;
    }

    /**
     *
     * @return {Company|*}
     */
    getCompany() {
        return this.company;
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

    /**
     *
     * @param {string}gender
     */
    setGender(gender) {
        this.gender = gender;
    }
    /**
     *
     * @return {string|*}
     */
    getGender() {
        return this.gender;
    }
}

module.exports = CompanyManager;
