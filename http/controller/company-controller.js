class CompanyController {

    async create(request, response, next) {
       response.json(await request.app.get('company.repository').create(request.company).catch(next))
    }

    async update(request, response, next) {
       response.json(await request.app.get('company.repository').update(request.company).catch(next))
    }

    async remove(request, response ,next) {
       response.json(await request.app.get('company.repository').remove(request.params.id).catch(next))
    }

    async get(request, response, next) {
           response.json(await request.app.get('company.repository').get(request.params.id).catch(next));
    }

    async all(request, response, next) {
       response.json(await request.app.get('company.repository').all().catch(next))
    }

    async searchByKeyword(request, response, next) {
       response.json(await request.app.get('company.repository').searchByKeyword(request.query.keyword).catch(next))
    }
}

module.exports = CompanyController;
