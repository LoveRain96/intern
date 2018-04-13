const InternshipRegistrationProvider = require('./internship-registration-provider');
const InternshipRegistrationFactory  = require('./internship-registration-factory');
const InternshipRegistrationService  = require('./internship-registration-service');
const InternFactory                  = require('../intern/intern-factory');

module.exports = function (app) {
    let connection = app.get('databaseConnection');
    app.set('internshipRegistration.factory', new InternshipRegistrationFactory());
    app.set('internshipRegistration.provider', new InternshipRegistrationProvider(connection, new InternFactory()));
    app.set('registration.service', new InternshipRegistrationService(connection));
};
