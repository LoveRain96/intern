class Course {

    /**
     *
     * @param {string} startDate
     * @param {string} endDate
     * @param {string} name
     * @param {InternshipList} internshipList
     */
    constructor(startDate, endDate, name, internshipList=[]) {
        this.startDate      = startDate;
        this.endDate        = endDate;
        this.name           = name;
        this.internshipList = internshipList;
    }

    /**
     *
     * @return {string}
     */
    getStartDate() {
        return this.startDate;
    }

    /**
     *
     * @return {string}
     */
    getEndDate() {
        return this.endDate;
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
