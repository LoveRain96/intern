const LecturerRepository    = require('./lecturer-provider');
const LecturerFactory       = require('./lecturer-factory');
const LecturerProvider      = require('./lecturer-provider');
module.exports= function (app) {
    let connection = app.get('databaseConnection');
    app.set('lecture.factory' , new LecturerFactory());
    app.set('lecturer.repository', new LecturerRepository(connection, new LecturerFactory()));
    app.set('lecturer.provider', new LecturerProvider(connection));
};