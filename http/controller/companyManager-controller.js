class CompanyController {
    create(request, response, next) {
        request.app.get('companyManager.repo').create(request.manager).then(() => {
            response.json('success');
        }).catch(next)
    }
    update(request, response, next) {
        request.app.get('companyManager.repo').update(request.manager).then(result => {
            response.json(result);
        }).catch(next)
    }
    remove(request, response ,next) {
        request.app.get('companyManager.repo').remove(request.params.id).then(()=>{
            response.json('success')
        }).catch(next)
    }
    get(request, response, next) {
        request.app.get('companyManager.repo').get(request.params.id).then(result => {
            response.json(result)
        }).catch(next)
    }
    all(request, response, next) {
        request.app.get('companyManager.repo').all().then(result => {
            response.json(result)
        }).catch(next)
    }
    searchByName(request, response, next) {
        request.app.get('companyManager.repo').searchByName(request.query.name).then(result => {
            response.json(result)
        }).catch(next)
    }
}
module.exports = CompanyController;