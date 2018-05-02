class CompanyController {

   async create(request, response, next) {
       response.json(await request.app.get('company.repository').create(request.company))
    }

    async update(request, response, next) {
       //response.render('/abc', await request.app.get('company.repository').update(request.company))
       response.json(await request.app.get('company.repository').update(request.company))
    }
    async remove(request, response ,next) {
       response.json(await request.app.get('company.repository').remove(request.params.id))
    }

    async get(request, response, next) {
           response.json(await request.app.get('company.repository').get(request.params.id));

    }

    async all(request, response, next) {
       response.json(await request.app.get('company.repository').all())
    }

    async searchByKeyword(request, response, next) {
       response.json(await request.app.get('company.repository').searchByKeyword(request.query.keyword))
    }
}

module.exports = CompanyController;
