const UserServices = require('./user-services');

module.exports = function(app) {
    let connection = app.get('databaseConnection');
    app.set('user.services', new UserServices(connection));
};
