class CompanyController {
    create(request, response, next) {
        request.app.get('companyManager.repository').create(request.manager).then(result => {
            response.json(result);
        }).catch(next)
    }
    update(request, response, next) {
        request.app.get('companyManager.repository').update(request.manager).then(result => {
            response.json(result);
        }).catch(next)
    }
    remove(request, response ,next) {
        request.app.get('companyManager.repository').remove(request.params.id).then(()=>{
            response.json('success')
        }).catch(next)
    }
    get(request, response, next) {
        request.app.get('companyManager.repository').get(request.params.id).then(result => {
            response.json(result)
        }).catch(next)
    }
    all(request, response, next) {
        request.app.get('companyManager.repository').all().then(result => {
            response.json(result)
        }).catch(next)
    }
    searchByName(request, response, next) {
        request.app.get('companyManager.repository').searchByName(request.query.name).then(result => {
            response.json(result)
        }).catch(next)
    }
}
module.exports = CompanyController;