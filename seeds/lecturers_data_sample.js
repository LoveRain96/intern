
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('lecturers').del()
        .then(function () {
            // Inserts seed entries
            return knex('lecturers').insert([
                {code : '1', name: 'mai', gender : 'nu', phone: '03423423',email :'jack@', address : 'HN'},
                {code : '2', name: 'hoa', gender : 'nu', phone: '03423423',email :'jack@', address : 'HN'},
                {code : '3', name: 'kim', gender : 'nu', phone: '03423423',email :'jack@', address : 'HN'},
                {code : '4', name: 'nga', gender : 'nu', phone: '03423423',email :'jack@', address : 'HN'},
            ]);
        });
};
