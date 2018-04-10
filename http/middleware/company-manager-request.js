module.exports = function (request, response, next) {
    request.manager = request.app.get('manager.factory').makeFromDB(request.body);
    next();
};
