class InternshipList {

    constructor(internship = []) {
        this.internship = internship;
    }

    add(internship) {
        this.internship.push(internship)
    }
    getList() {
        return this.internship;
    }

}

module.exports = InternshipList;