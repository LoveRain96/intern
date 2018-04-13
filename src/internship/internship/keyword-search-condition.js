class KeywordSearchCondition {
    constructor (keyword) {
        this.keyword = keyword;
    }

    describe(sqlQuery) {
        let keyword = this.keyword;
        return sqlQuery.where(function () {
            this.where('deadline', 'like', '%'+ keyword + '%')
                .orWhere('courses.name', 'like', '%' + keyword + '%')
                .orWhere('companies.name', 'like', '%' + keyword + '%')
                .orWhere('lecturers.name', 'like', '%' + keyword + '%')
        }).where({
            'internships.deleted_at': null
        })
    }
}

module.exports = KeywordSearchCondition;
