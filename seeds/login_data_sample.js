
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('login').del()
    .then(function () {
      // Inserts seed entries
      return knex('login').insert([
        {user_id : '1', password : '12345', role : 'STUDENT' , archived_at : null},
        {user_id : '2', password : '12345', role : 'LECTURER' , archived_at : null},
        {user_id : '3', password : '12345', role : 'ADMIN' , archived_at : null},
      ]);
    });
};
