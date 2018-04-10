module.exports = function (request, response, next) {
    request.company = request.app.get('company.factory').makeFromDB(request.body);
    request.company.setId(request.params.id);
    next();
};
