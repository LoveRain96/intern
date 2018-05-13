const bcrypt = require('bcrypt');
const knext  = require('knex')({
    client : 'mysql',
    connection : {
        host : 'localhost',
        user : 'root',
        password: '123456',
        database : 'intern_management'
    }
});

let salt = 10;
let users = '1401753';
let plainTextPassword = '12101995';
let role = 'STUDENT';

bcrypt.hash(plainTextPassword, 10).then(function (hash) {
   return knex('credentials').insert({username : users , password : hash , role : role});
});
