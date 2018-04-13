class UndeletedSearchCondition {

    describe(sqlQuery){
        return sqlQuery.where({
            'internships.deleted_at': null
        })
    }
}

module.exports = UndeletedSearchCondition;
