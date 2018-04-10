class Lecturer {
    /**
     *
     * @param {id} id
     */
    setId(id) {
        this.id = id;
    }
    /**
     *
     * @return {string}
     */
    getId() {
        return this.id;
    }

    /**
     *
     * @param {string} sex
     */
    setSex(sex) {
        this.sex = sex;
    }

    /**
     *
     * @return {string}
     */
    getSex() {
        return this.sex;
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
