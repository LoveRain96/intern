const express   = require('express');
const router    = express.Router();

router.get('/', function (req, res) {
   res.render('home.njk')
});

router.get('/company', (req, res) => {
    res.render('company.njk');
});

router.get('/course', (req, res) => {
    res.render('course.njk')
});

router.get('/internship', (req, res) => {
    res.render('internship.njk')
});
/*
    router login
 */
const LoginController = require('../http/controller/login-controller');

let loginController = new LoginController;

router.get('/login', function (req, res) {
    res.render('login.njk');
});
/*
    router import interns
 */
const InternController = require('../http/controller/intern-controller');

let internController = new InternController;

router.get('/import/interns', internController.import);

/*
    router  lecturer
 */
const LecturerController = require('../http/controller/lecturer-controller');

let lecturerController = new LecturerController();

router.get('/import/lecturer', lecturerController.import);

/*
    router company
 */
const CompanyController = require('../http/controller/company-controller');
const companyRequest = require('../http/middleware/company-request');

let companyController = new CompanyController;


/*router.get('/company/add', function (request, response, next) {
    response.render('company.njk')
});*/

router.get('/add-company', function (req, res) {
    res.render('add-company.njk')
});

router.get('/companies', companyController.all);

router.get('/detail-company/:id', companyController.get);

router.get('/companies/search-basic', companyController.searchByName);

router.post('/company', companyRequest, companyController.create);

router.post('/company/:id', companyRequest, companyController.update);

router.get('/company/:id', companyController.remove);
/*
    router company manager
 */
const CompanyManagerController = require('../http/controller/companyManager-controller');
const managerRequest = require('../http/middleware/company-manager-request');

let companyManagerController = new CompanyManagerController;

router.get('/manager/add', function (request, response, next) {
    response.render('addManager.njk')
});

router.get('/manager', companyManagerController.all);

router.get('/manager/:id', companyManagerController.get);

router.get('/manager/search-basic', companyManagerController.searchByName);

router.post('/manager', managerRequest, companyManagerController.create);

router.put('/manager/:id', managerRequest, companyManagerController.update);

router.delete('/manager/:id', companyManagerController.remove);
/*
    router course
 */

const CourseController = require('../http/controller/course-controller');
const courseRequest = require('../http/middleware/course-request');

let courseController = new CourseController();

router.get('/course/add', function (request, response, next) {
    response.render('add-course.njk')
});
router.get('/courses', courseController.all);

router.get('/course/:id', courseController.get);

router.post('/course', courseRequest, courseController.create);

router.post('/course/:id', courseRequest, courseController.update);

router.get('/delete/course/:id', courseController.remove);

/*
    router Internship
 */
const isCourse = require('../http/middleware/is-course');
const InternshipController = require('../http/controller/internship-controller');

let internshipController = new InternshipController();

router.get('/course/internship/add', function (request, response , next) {
    response.render('addInternship.njk');
});

router.get('/course/:idCourse/internship',isCourse, internshipController.searchByCourse);

router.post('/course/:idCourse/internship',isCourse, internshipController.create);

router.put('/course/:idCourse/internship/:id',isCourse, internshipController.update);

router.delete('/course/internship/:id', internshipController.remove);

router.get('/course/internships', internshipController.all);

/*
    router internship-list
 */
const internshipList = require('../http/controller/internship-list-controller');

router.get('/course/internship/confirmed/:id', internshipList.getListCONFIRMED);

router.get('/course/internship/pending/:id', internshipList.getListPENDING);

/*
    router registration
 */
const registration = require('../http/controller/registration-controller');

router.post('/registration/send', registration.registerInternShip);

router.put('/registration/confirm', registration.confirm);

module.exports = router;