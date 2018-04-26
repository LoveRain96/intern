class Course {
    /**
     *
     * @param duration
     * @param name
     * @param internshipList
     */
    constructor(duration, name, internshipList=[]) {
        this.duration   = duration;
        this.name = name;
        this.internshipList = internshipList;
    }
    /**
     *
     * @return {InternshipList}
     */
    getInternshipList() {
        return this.internshipList;
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
     * @return {Duration}
     */
    getDuration() {
        return this.duration;
    }

    /**
     *
     * @param {string}status
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
}

module.exports = Course;
