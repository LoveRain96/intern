class CourseController {
    async all (request, response, next) {
         response.json(await request.app.get('course.repository').all())
    }

    async get (request, response, next) {
         response.json(await  request.app.get('course.repository').get(request.params.id));
    }

    create(request, response, next) {
        let repo = request.app.get('course.repository');
        repo.create(request.course).then( course => {
            response.send(course);
        }).catch(next);
    }

    async update(request, response, next) {
            response.json(await request.app.get('course.repository').update(request.course));
    }

    async remove(request, response, next) {
        response.json(await request.app.get('course.repository').remove(request.params.id));
    }
}
module.exports = CourseController;