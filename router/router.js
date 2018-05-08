const express                       = require('express');
const router                        = express.Router();
const LoginController               = require('../http/controller/login-controller');
const InternController              = require('../http/controller/intern-controller');
const LecturerController            = require('../http/controller/lecturer-controller');
const registration                  = require('../http/controller/registration-controller');
const CompanyController             = require('../http/controller/company-controller');
const CourseController              = require('../http/controller/course-controller');
const InternshipController          = require('../http/controller/internship-controller');
const internshipList                = require('../http/controller/internship-list-controller');
const checkData                     = require('../http/middleware');
const SearchByCourse                = require('../src/internship/search-service/course-search-condition');
const ListAllInternship             = require('../src/internship/search-service/undeleted-search-condition');
const cors                          = require('cors');

let loginController                 = new LoginController;
let lecturerController              = new LecturerController();
let internshipController            = new InternshipController();
let courseController                = new CourseController();
let companyController               = new CompanyController;
let internController                = new InternController;


router.get('/import/interns', internController.import);

router.get('/import/lecturer', lecturerController.import);

/*
    Company
 */

router.get('/companies', companyController.all);

router.get('/company/:id', companyController.get);

router.get('/companies/search-basic', companyController.searchByKeyword);

router.post('/company', checkData.companyRequest, companyController.create);

router.put('/company/:id', checkData.companyRequest, companyController.update);

router.delete('/company/:id', companyController.remove);

/*
    COURSE
*/

router.get('/courses',cors(), courseController.all);

router.get('/course/:id', courseController.get);

router.post('/course',checkData.courseRequest, courseController.create);

router.put('/course/:id', checkData.courseRequest, courseController.update);

router.delete('/course/:id', courseController.remove);

/*
    Internship
 */
const UndeletedSearch      = require('../src/internship/search-service/undeleted-search-condition');

router.get('/internships', (req, res, next) => {
    req.condition = new UndeletedSearch();
    next();
}, internshipController.all);



//router.get('/course/:idCourse/internship',checkData.isCourse, internshipController.searchByCourse);

router.get('/listInternship', function (req, res, next) {
    req.condition = new ListAllInternship();
    next()
}, internshipController.all);

router.get('/search-course/:id',checkData.courseRequest, function (req, res, next) {
    req.condition = new SearchByCourse(req.course);
    next()
});


router.post('/course/:idCourse/internship',checkData.isCourse, internshipController.create);

router.put('/course/:idCourse/internship/:id',checkData.isCourse, internshipController.update);

router.delete('/course/search-service/:id', internshipController.remove);

router.get('/course/search-service/confirmed/:id', internshipList.getListCONFIRMED);

router.get('/course/search-service/pending/:id', internshipList.getListPENDING);

/*
    Registration
 */
router.post('/registration/send', registration.registerInternShip);

router.put('/registration/confirm', registration.confirm);

module.exports = router;
