
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('registrations').del()
    .then(function () {
      // Inserts seed entries
      return knex('registrations').insert([
        {id: 1, intern_code: '1', internship_id:'1', status : 'PENDING'},
        {id: 2, intern_code: '3', internship_id:'1', status : 'CONFIRMED'},
        {id: 3, intern_code: '2', internship_id:'1', status : 'CONFIRMED'},
        {id: 4, intern_code: '1', internship_id:'2', status : 'CONFIRMED'},
      ]);
    });
};
