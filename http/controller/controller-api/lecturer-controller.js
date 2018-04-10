class LecturerController {

    get(request, response, next) {
        let lecturer = request.app.get('lecturer.repository').get(request.params.id);
        let internList = request.app.get('internship.intern_list').get(request.params.id);
        Promise.all([lecturer,  internList]).then(console.log)
    }
}
module.exports = LecturerController;