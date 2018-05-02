class CourseController {
    async all (request, response, next) {
         response.json(await request.app.get('course.repository').all())
    }

    async get (request, response, next) {
         response.json(await  request.app.get('course.repository').get(request.params.id));
    }

    async create(request, response, next) {
        response.json(await  request.app.get('course.repository').create(request.course));
    }

    async update(request, response, next) {
            response.json(await request.app.get('course.repository').update(request.course));
    }

    async remove(request, response, next) {
        response.json(await request.app.get('course.repository').remove(request.params.id));
    }
}
module.exports = CourseController;