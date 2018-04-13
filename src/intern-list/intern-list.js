class InternList {
    /**
     *
     * @param {Lecturer}lecturer
     * @param {Intern}intern
     */
    constructor(lecturer, intern) {
        this.lecturer  = lecturer;
        this.intern    = intern
    }

    getLecturer() {
        return this.lecturer;
    }

    getIntern() {
        return this.intern;
    }

}

module.exports = InternList;
