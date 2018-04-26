class InternList {
    /**
     *
     * @param interns
     * @param lecturer
     */
    constructor(interns=[], lecturer) {
        this.interns = interns;
        this.lecturer = lecturer;
    }

    add(intern) {
        this.interns.push(intern);
    }
}

module.exports = InternList;
