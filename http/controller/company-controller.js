class CompanyController {
    create(request, response, next) {
        request.app.get('company.repository').create(request.company).then( () => {
            response.json(request.company);
        }).catch(next)
    }
    update(request, response, next) {
        request.app.get('company.repository').update(request.company).then(() => {
            response.redirect('/company');
        }).catch(next)
    }
    remove(request, response ,next) {
        request.app.get('company.repository').remove(request.params.id).then(()=>{
            response.redirect('/company')
        }).catch(next)
    }

    get(request, response, next) {
        request.app.get('company.repository').get(request.params.id).then((company) => {
            response.render('detail-company.njk', {company : company})
        }).catch(next)
    }

    all(request, response, next) {
        request.app.get('company.repository').all().then( (foundCompany) => {
            response.json(foundCompany);
        }).catch(next)
    }

    searchByName(request, response, next) {
        request.app.get('company.repository').searchByName(request.query.keyword)
            .then( foundCompany => {
                response.json(foundCompany)
            }).catch(next)
    }
}
module.exports = CompanyController;