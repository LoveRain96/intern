require('dotenv').config();

module.exports = {
    http: {
        port : process.env.HTTP_PORT || 8080
    },

    services : [
        require('./http'),
        require('./database'),
        require('./src/company'),
        require('./src/course'),
        require('./src/lecturer'),
        require('./src/internship'),
        require('./src/internship-registration'),

    ],

    database : {
        client: 'mysql',
        connection: {
            host: process.env.DB_HOST || 'localhost',
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASS || '123456',
            database: process.env.DB_DATA || 'QLTT'
        }
    }
};