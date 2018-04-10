
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('courses').del()
    .then(function () {
      // Inserts seed entries
      return knex('courses').insert([
        {id: 1, name :'ky 1 nam 2017', startDate: '1995-01-01',endDate :'1996-10-11', status :"OPEN"},
        {id: 2, name :'ky 2 nam 2017', startDate: '1996-01-25',endDate :'1996-04-25', status:'OPEN'},
        {id: 3, name :'ky 1 nam 2018', startDate: '1998-02-15',endDate :'1996-05-15', status: 'OPEN'},
        {id: 4, name :'ky 2 nam 2018', startDate: '1998-02-20',endDate :'1996-05-20', status: 'CLOSE'},
      ]);
    });
};
