
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('internships').del()
    .then(function () {
      // insertships seed entries
      return knex('internships').insert([
        {id: 1, course_id: '1', lecturer_code :'1',deadline : '1996/1/1', company_id: '1'},
        {id: 2, course_id: '1', lecturer_code :'1',deadline : '1996/1/1',  company_id: '2'},
        {id: 3, course_id: '2', lecturer_code :'2',deadline : '1996/1/1',  company_id: '3'},
      ]);
    });
};
