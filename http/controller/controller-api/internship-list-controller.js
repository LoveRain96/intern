const InternshipList = require('../../src/internship/intership-list');

exports.getListPENDING = function (request, response, next) {
    let lecturer = request.app.get('lecturer.repository').get(request.params.id);
    let internshipRegistrations = request.app.get('internshipRegistration.Provider').getPENDING(request.params.id);
    Promise.all([lecturer, internshipRegistrations]).then(value => {
        let internshipList = new InternshipList(value[1], value[0]);
        response.json(internshipList);
    }).catch(next)
};

exports.getListCONFIRMED= function (request, response, next) {
    let lecturer = request.app.get('lecturer.repository').get(request.params.id);
    let internshipRegistrations = request.app.get('internshipRegistration.Provider').getCONFIRMED(request.params.id);
    Promise.all([lecturer, internshipRegistrations]).then(value => {
        let internshipList = new InternshipList(value[1], value[0]);
        response.render('internshipList.njk', {internshipList : internshipList});
    }).catch(next)
};