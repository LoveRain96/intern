
module.exports = function (request, response, next) {
    request.course = request.app.get('course.factory').makeFromRequest(request);
    next();
};