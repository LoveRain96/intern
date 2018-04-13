const InternshipFactory    = require('./internship-factory');
const InternshipRepository = require('./internship-repository');
const InternshipSearcher = require('./search-service/searcher');

module.exports = function (app) {
    let connection = app.get('databaseConnection');
    app.set('internship.repository', new InternshipRepository(connection,new InternshipFactory()));
    app.set('internship.factory', new InternshipFactory());
    app.set('internship.searcher', new InternshipSearcher(connection, new InternshipFactory()));

};
