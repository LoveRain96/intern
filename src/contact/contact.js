class Contact {
    /**
     *
     * @param {int} phone
     */
    setPhone(phone) {
        this.phone = phone;
    }

    /**
     *
     * @return {int}
     */
    getPhone() {
        return this.phone;
    }

    /**
     *
     * @param {string} email
     */
    setEmail(email) {
        this.email = email;
    }

    /**
     *
     * @return {string}
     */
    getEmail() {
        return this.email;
    }
    toJson() {
        return {
            email : this.getEmail(),
            phone : this.getPhone()
        }
    }
}
module.exports = Contact;