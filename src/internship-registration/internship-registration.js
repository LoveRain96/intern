class InternshipRegistration {
    /**
     *
     * @param {Intern} intern
     * @param {Internship} internship
     */
    constructor(intern , internship) {
        this.intern = intern;
        this.internship = internship;
    }

    /**
     *
     * @param {string} status
     */
    setStatus(status) {
        this.status = status;
    }

    /**
     *
     * @return {string|*}
     */
    getStatus() {
        return this.status;
    }
    /**
     *
     * @return {Internship}
     */
    getInternship()  {
        return this.internship;
    }
    /**
     *
     * @return {Intern}
     */
    getIntern() {
        return this.intern;
    }
}

module.exports = InternshipRegistration;
