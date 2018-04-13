module.exports = function (app) {
    app.set('databaseConnection', require('knex')(app.get('config').database));
};