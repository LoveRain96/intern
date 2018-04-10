require('dotenv').config();

module.exports = require('knex')({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || 'anhtien1996',
        database: process.env.DB_DATA || 'QLTT'
    }
});