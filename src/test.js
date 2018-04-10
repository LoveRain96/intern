const Duration = require('./duration/duration');
const Course   = require('./course/course');
const User     = require('./login/user');
const RegistrationPolicy = require('./registration-policy/internship-registration-policy');
const Registration = require('./internship-registration/internship-registration');
const Internship = require('./internship/internship');
const Intern    = require('./intern/intern');
const RegistrationService = require('./internship-registration/internship-registration-service');
const knex = require('../database/knex-connection');




let duration = new Duration('3/1/2018','4/1/2018');

let course   = new Course(duration,'time 1');
course.setStatus('OPEN');

let internship = new Internship();
internship.setId(6);

let user = new User();

let registrationPolicy = new RegistrationPolicy();

if (registrationPolicy.canRegistration(user, course)) {
    let intern = new Intern('duck');
    intern.setId(5);
    let registration = new Registration(intern,internship);
    let registrationService = new RegistrationService(knex);
    registrationService.send(registration).then(function () {
        console.log('insert success');
    });
}



