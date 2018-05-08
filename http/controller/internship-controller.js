class InternshipController {

    async searchByCourse(request, response, next) {
        response.json(await request.app.get('internship.repository').searchByCourse(request.course).catch(next))
    }
    async all(request, response, next) {
        response.json(await request.app.get('internship.repository').all().catch(next));
    }
    async get(request, response, next) {
        response.json(await request.app.get('internship.repository').get(request.params.id, request.course).catch(next))
    }
    async create(request, response, next) {
        response.json(await request.app.get('internship.repository').create(request.internship).catch(next))
    }
    async update(request, response, next) {
        response.json(await request.app.get('internship.repository').update(request.internship).catch(next))
    }
    async remove(request, response, next) {
        response.json(await request.app.get('internship.repository').remove(request.internship).catch(next))
    }
}
module.exports = InternshipController;