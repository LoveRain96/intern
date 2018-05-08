class Company {

    /**
     *
     * @param {string} name
     */
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
     * @param {string} phoneManager
     */
    setPhoneManager(phoneManager) {
        this.phoneManager = phoneManager;
    }

    /**
     *
     * @return {string}
     */
    getPhoneManager() {
        return this.phoneManager;
    }

    /**
     *
     * @param {string} emailManager
     */
    setEmailManager(emailManager) {
        this.emailManager = emailManager;
    }

    /**
     *
     * @return {string}
     */
    getEmailManager() {
        return this.emailManager;
    }

    /**
     *
     * @param {string} nameManager
     */
    setNameManager(nameManager) {
        this.nameManager = nameManager;
    }

    /**
     *
     * @return {string}
     */
    getNameManager() {
        return this.nameManager;
    }

}

module.exports = Company;
