class IdSearchCondition {

    constructor(internshipId) {
        this.internshipId = internshipId;
    }
    describe(sqlQuery) {
        let internshipId = this.internshipId;
        return sqlQuery.where({
            'internships.deleted_at' : null,
            'internships.id' : internshipId
        })
    }
}

module.exports = IdSearchCondition;
