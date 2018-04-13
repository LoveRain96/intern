module.exports = function (request, response, next) {
    request.app.get('companyManager.factory').makeFromRequest(request.body).then(companyManager => {
        request.manager = companyManager;
        request.manager.setId(request.params.id);
        next();
    });
};
