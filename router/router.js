const express                       = require('express');
const router                        = express.Router();
const LoginController               = require('../http/controller/login-controller');
const InternController              = require('../http/controller/intern-controller');
const CompanyManagerController      = require('../http/controller/companyManager-controller');
const LecturerController            = require('../http/controller/lecturer-controller');
const registration                  = require('../http/controller/registration-controller');
const CompanyController             = require('../http/controller/company-controller');
const CourseController              = require('../http/controller/course-controller');
const InternshipController          = require('../http/controller/internship-controller');
const internshipList                = require('../http/controller/internship-list-controller');
const checkData                     = require('../http/middleware');

let loginController                 = new LoginController;
let lecturerController              = new LecturerController();
let internshipController            = new InternshipController();
let courseController                = new CourseController();
let companyController               = new CompanyController;
let companyManagerController        = new CompanyManagerController;
let internController                = new InternController;




router.get('/login', function (req, res) {
    res.render('login.njk');
});

router.get('/', function (req, res) {
   res.render('home.njk')
});


router.get('/internship', (req, res) => {
    res.render('internship.njk')
});

router.get('/import/interns', internController.import);


router.get('/import/lecturer', lecturerController.import);


router.get('/add-company', function (req, res) {
    res.render('add-company.njk')
});

router.get('/company', (req, res) => {
    res.render('company.njk');
});
router.get('/companies', companyController.all);
router.get('/detail-company/:id', companyController.get);
router.get('/companies/search-basic', companyController.searchByName);
router.post('/company', checkData.companyRequest, companyController.create);
router.post('/company/:id', checkData.companyRequest, companyController.update);
router.get('/company/:id', companyController.remove);


router.get('/manager/add', function (request, response) {
    response.render('addManager.njk')
});
router.get('/manager', companyManagerController.all);

router.get('/manager/:id', companyManagerController.get);

router.get('/manager/search-basic', companyManagerController.searchByName);

router.post('/manager', checkData.managerRequest, companyManagerController.create);

router.put('/manager/:id', checkData.managerRequest, companyManagerController.update);

router.delete('/manager/:id', companyManagerController.remove);


router.get('/course/add', function (request, response, next) {
    response.render('add-course.njk')
});
router.get('/course', (req, res) => {
    res.render('course.njk')
});

router.get('/courses', courseController.all);

router.get('/course/:id', courseController.get);

router.post('/course', checkData.courseRequest, courseController.create);

router.post('/course/:id', checkData.courseRequest, courseController.update);

router.get('/delete/course/:id', courseController.remove);



const UndeletedSearch      = require('../src/internship/internship/undeleted-search-condition');

router.get('/internship', function (req, res) {
    res.render('internship.njk')
});
router.get('/internships', (req, res, next) => {
    req.condition = new UndeletedSearch();
    next();
}, internshipController.all);

router.get('/course/internship/add', function (request, response ) {
    response.render('addInternship.njk');
});

router.get('/course/:idCourse/internship',checkData.isCourse, internshipController.searchByCourse);

router.post('/course/:idCourse/internship',checkData.isCourse, internshipController.create);

router.put('/course/:idCourse/internship/:id',checkData.isCourse, internshipController.update);


router.delete('/course/internship/:id', internshipController.remove);

router.get('/course/internship/confirmed/:id', internshipList.getListCONFIRMED);

router.get('/course/internship/pending/:id', internshipList.getListPENDING);

router.post('/registration/send', registration.registerInternShip);

router.put('/registration/confirm', registration.confirm);


module.exports = router;