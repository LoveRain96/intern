
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('companies').del()
        .then(function () {
            // Inserts seed entries
            return knex('companies').insert([
                {id: 1, name: 'FPT', phone: '03423423',email :'jack@', address : 'HN'},
                {id: 2, name: 'SAMSUNG', phone: '03423423',email :'jack@', address : 'HN'},
                {id: 3, name: 'TQ', phone: '03423423',email :'jack@', address : 'HN'},
            ]);
        });
};
