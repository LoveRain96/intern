const InternshipList = require('../../src/course/internship-list');

class InternshipController {

    searchByCourse(request, response, next) {
        request.app.get('internship.repository').searchByCourse(request.course).then(results => {
            let internshipList = new InternshipList(results);
            response.json(internshipList);
        }).catch(next);
    }
    all(request, response, next) {
        request.app.get('internship.repository').all().then(results => {
            response.json(results);
        }).catch(next);
    }
    get(request, response, next) {
        request.app.get('internship.repository').get(request.params.id).then(results => {
            response.json(results)
        }).catch(next);
    }
    create(request, response, next) {
        request.app.get('internship.repository').create(request.internship).then(result => {
            response.json(result)
        }).catch(next)
    }
    update(request, response, next) {
        request.app.get('internship.repository').update(request.internship).then(() => {
            response.json('success')
        }).catch(next)
    }
    remove(request, response, next) {
        request.app.get('internship.repository').remove(request.internship).then(() => {
            response.json('success')
        }).catch(next)
    }
}
module.exports = InternshipController;