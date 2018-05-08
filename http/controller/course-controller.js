class CourseController {
    async all (request, response, next) {
        response.json(await request.app.get('course.repository').all().catch(next))
    }

    async get (request, response, next) {
        response.json(await  request.app.get('course.repository').get(request.params.id).catch(next));
    }

    async create(request, response, next) {
        response.json(await request.app.get('course.repository').create(request.course).catch(next));
    }

    async update(request, response, next) {
        response.json(await request.app.get('course.repository').update(request.course).catch(next));
    }

    async remove(request, response, next) {
        let course = request.app.get('course.repository').remove(request.params.id).catch(next);
        let internship = request.app.get('internship.repository').removeByCourse(request.params.id).catch(next);
        response.json("course.id :"+ await course +" internships.course_id :"+ await internship);
    }

    async searchByName(request, response, next) {
        response.json(await request.app.get('course.repository').searchByName(request.query.name).catch(next));
    }
}
module.exports = CourseController;