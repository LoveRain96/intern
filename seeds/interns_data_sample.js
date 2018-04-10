
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('interns').del()
        .then(function () {
            // Inserts seed entries
            return knex('interns').insert([
                {code : '1', name: 'trung', gender : 'nam', phone: '03423423',email :'jack@', address : 'HN', status : 'STUDENT'},
                {code : '2', name: 'hoang', gender : 'nam', phone: '03423423',email :'jack@', address : 'HN', status : "STUDENT"},
                {code : '3', name: 'toan', gender : 'nam', phone: '03423423',email :'jack@', address : 'HN', status : "STUDENT"},
                {code : '4', name: 'tuan', gender : 'nam', phone: '03423423',email :'jack@', address : 'HN', status : "STUDENT"},
            ]);
        });
};
