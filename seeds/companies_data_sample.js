
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('companies').del()
        .then(function () {
            // Inserts seed entries
            return knex('companies').insert([
                {id: 1, name: 'FPT', phoneManager: '03423423', emailManager :'jack@', address : 'HN', nameManager : 'Mr.Tien'},
                {id: 2, name: 'SAMSUNG', phoneManager: '03423423', emailManager :'jack@', address : 'HN', nameManager : 'Mr.Toan'},
                {id: 3, name: 'Sphinx', phoneManager: '03423423', emailManager :'jack@', address : 'HN', nameManager : 'Mr.Son'},
            ]);
        });
};
