const InternshipFactory = require('../internship-factory');


class Searcher {
    /**
     *
     * @param  connection
     * @param {InternshipFactory}factory
     */
    constructor(connection, factory) {
        this.connection = connection;
        this.factory    = factory;
    }

    search(condition) {
        let sqlQuery;
        let factory = this.factory;
        sqlQuery = this.connection
            .select('courses.id', 'courses.name', 'courses.startDate', 'courses.endDate', 'courses.status',
                'companies.id', 'companies.name', 'companies.phone', 'companies.email', 'companies.address',
                'internships.deadline')
            .from('internships')
            .leftJoin('courses', function () {
                this.on('courses.id', '=', 'internships.course_id' )
            })
            .leftJoin('companies', function () {
                this.on('companies.id', '=', 'internships.company_id')
            });
        condition.describe(sqlQuery);
        return sqlQuery.then(results => {
            return results.map(element => factory.makeFromDB(element));
        });
    }


}

module.exports = Searcher;
