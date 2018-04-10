
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('companyManagers').del()
        .then(function () {
            // Inserts seed entries
            return knex('companyManagers').insert([
                {id: 1, name: 'mai',company_id: '1', gender : 'nu', phone: '03423423',email :'jack@', address : 'HN'},
                {id: 2, name: 'hoa',company_id: '2', gender : 'nu', phone: '03423423',email :'jack@', address : 'HN'},
                {id: 3, name: 'tai',company_id: '3', gender : 'nu', phone: '03423423',email :'jack@', address : 'HN'},
            ]);
        });
};
