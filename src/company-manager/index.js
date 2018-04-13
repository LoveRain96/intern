const CompanyManagerRepository = require('./company-manager-repository');
const CompanyManagerFactory    = require('./company-manager-factory');

module.exports = function (app) {
    let connection = app.get('databaseConnection');
    app.set('companyManager.repo', new CompanyManagerRepository(connection, new CompanyManagerFactory()));
    app.set('companyManager.factory', new CompanyManagerFactory(app))
};