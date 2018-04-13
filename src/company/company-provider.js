const Factory = require('./company-factory');
let factory   = new Factory();

class CompanyProvider {
    constructor(connection) {
        this.connection = connection;
    }

    provide(id) {
        return this.connection('companies').select()
            .where({id: id, deleted_at: null})
            .then(company => factory.makeFromDB(company[0]));
    }
}

module.exports = CompanyProvider;
