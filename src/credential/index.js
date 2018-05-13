const CredentialFactory  = require('./credential-factory');
const CredentialServices = require('./credential-services');
const Encoder            = require('./encoder');

module.exports = function(app) {
    let connection = app.get('databaseConnection');
    app.set('credential.services', new CredentialServices(new CredentialFactory, connection, new Encoder));
};
