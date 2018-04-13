const CompanyRepository = require('./company-repository');
const CompanyFactory    = require('./company-factory');
const CompanyProvider   = require('./company-provider');

module.exports = function(app) {
    let connection = app.get('databaseConnection');
    app.set('company.repository', new CompanyRepository(connection, new CompanyFactory()));
    app.set('company.factory', new CompanyFactory());
    app.set('company.provider', new CompanyProvider(connection));
};
