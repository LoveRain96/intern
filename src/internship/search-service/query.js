module.exports = {
  searcher : '.select('courses.id', \'courses.name as courses-name\', \'courses.startDate\', \'courses.endDate\', \'courses.status\',\n' +
  '                \'companies.id\', \'companies.name as companies-name\', \'companies.phone as companies-phone\', \'companies.email as companies-email\', \'companies.address as companies-address\',\n' +
  '                \'lecturers.code\', \'lecturers.name as lecturers-name\', \'lecturers.gender\', \'lecturers.phone as lecturers-phone\', \'lecturers.email as lecturers-email\', \'lecturers.address as lecturers-address\'\n' +
  '                ,\'internships.deadline\')\n' +
  '            .from(\'internships\')\n' +
  '            .leftJoin(\'courses\', function () {\n' +
  '                this.on(\'courses.id\', \'=\', \'internships.course_id\' )\n' +
  '            })'

};