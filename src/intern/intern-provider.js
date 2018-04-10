class InternProvider {
    constructor(connection, internFactory) {
        this.connection    = connection;
        this.internFactory = internFactory;
    }
    get(id) {
        return this.connection('intern').where({
            code : id
        }).then(intern => this.internFactory.makeFromDB(intern[0]))
    }
}
module.exports = InternProvider;