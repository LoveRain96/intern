require('dotenv').config();
/*

var exporter = require('csv-to-mysql');
exporter(process.env.DB_HOST,process.env.DB_DATA,process.env.DB_USER,process.env.DB_PASS,'/home/duc/Desktop/listsv.csv');*/

const connection = require('knex')({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password : process.env.DB_PASS,
        database: process.env.DB_DATA

    }
});

var csv = require('csv-parser');
var fs = require('fs');

fs.createReadStream('test.csv')
    .pipe(csv())
    .on('data', function (data) {
        connection('test').insert({
            id : null,
            name : data.NAME,
            age  : data.AGE
        });
    })
    .on('end', function () {
        console.log('FINISHED...');
    });
