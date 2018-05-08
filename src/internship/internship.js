class Internship {
    /**
     *
     * @param company
     * @param internList
     */
    constructor(company, internList=[]) {
        this.company  = company;
        this.internList = internList;
    }
    setLecturer(lecturer) {
        this.lecturer = lecturer;
    }
    getLecturer() {
        return this.lecturer;
    }
    /**
     *
     * @param deadline
     */
    setDeadline(deadline) {
        this.deadline = deadline;
    }

    /**
     *
     * @return {*}
     */
    getDeadline() {
        return this.deadline;
    }

    /**
     *
     * @param course
     */
    setCourse(course) {
        this.course = course;
    }
    getCourse() {
        return this.course;
    }
    /**
     *
     * @param {InternshipList} internList
     */
    setInternList(internList) {

    }

    /**
     *
     * @param status
     */
    setStatus(status) {
        this.status = status;
    }

    /**
     *
     * @return {string}
     */
    getStatus() {
        return this.status;
    }
    /**
     *
     * @return {InternshipList}
     */
    getInternList() {
        return this.internList;
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
     * @return {Company}
     */
    getCompany() {
        return this.company;
    }

}

module.exports = Internship;