const InternshipRegistration = require('../../src/internship-registration/internship-registration');

exports.registerInternShip = function (request, response) {
    let registration = new InternshipRegistration(request.user, request.internship);
    let service      = request.app.get('registration.service');
    service.send(registration).then(() => {
        response.json('success')
    });
};

exports.confirm = function (request, response) {
    let service = request.app.get('registration.service');
    service.confirm(request.params.id).then(() => {
        response.json('success')
    });
};