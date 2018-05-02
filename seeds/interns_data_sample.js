
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('interns').del()
        .then(function () {
            // Inserts seed entries
            return knex('interns').insert([
                {code : '1', lastName: 'loi',firstName: 'dao', gender : 'male', phone: '03423423', phoneParent:'01222', email :'jack@', address : 'HN'},
                {code : '2', lastName: 'dao',firstName: 'tap', gender : 'female', phone: '03423423', phoneParent:'01222', email :'abc@', address : 'HN'},
                {code : '3', lastName: 'mai',firstName: 'hoa', gender : 'male', phone: '03423423', phoneParent:'01222', email :'test@', address : 'HN'},
            ]);
        });
};
