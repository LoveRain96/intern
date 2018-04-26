/*
const InternshipRegistrationService = require('./src/internship-registration/internship-registration-service');
const InternshipRegistration = require('./src/internship-registration/internship-registration');
const Intern = require('./src/intern/intern');
const Internship = require('./src/internship/internship');
const knex = require('./database/knex-connection');

let internshipRegistrationService = new InternshipRegistrationService(knex);
let internshipRegistration = new InternshipRegistration();

let intern = new Intern();
intern.setId(1);
let internship = new Internship();
internship.setId(1);
internshipRegistration.setIntern(intern);
internshipRegistration.setInternship(internship);
/!*
internshipRegistrationService.send(internshipRegistration).then(()=>{
    console.log('success')
});
*!/

internshipRegistrationService.confirm(1).then(()=>{
    console.log('success')
});*//*
const InternshipRepository = require('./src/search-service/search-service-repository');
const InternshipFactory = require('./src/search-service/search-service-factory');
let internshipRepository = new InternshipRepository(knex, new InternshipFactory());

internshipRepository.searchByCourse(1).then(console.log);*/
/*

const InternshipRegistration = require('./src/search-service-registration/search-service-registration-provider');
const InternFactory = require('./src/intern/intern-factory');

let internList = new  InternshipRegistration(knex, new InternFactory());

internList.getInternList(1).then(console.log);
*/

//let internList = new  InternList();
/*
const knex = require('./database/knex-connection');
const RegistrationNotExistedPolicy = require('./src/registration-policy/registration-not-existed-policy');

let registrationNotExistedPolicy = new RegistrationNotExistedPolicy(knex);

registrationNotExistedPolicy.check(4,1).then(result => {
    if (result) {

    }
});*/
/*
let express = require('express');
let cookieParser = require('cookie-parser');
let session = require('cookie-session');

let app = express();

app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!",name : 'pass',value : "abc"}));

app.get('/', function(req, res){
    if(req.session.password){
        console.log(req.session.password);
        req.session.password++;
        res.send("You visited this page " + req.session.password+ " times");
    } else {
        req.session.password = 1;
        res.send("Welcome to this page for the first time!");
    }
});

app.listen(3000);

*/
