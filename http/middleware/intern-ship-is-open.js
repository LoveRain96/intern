module.exports = function (request, response, next) {
    request.app.get('internship.repository').get(request.params.id).then(result => {
        request.internship = request.app.get('internship.factory').makeFromDB(result[0]);
        next();
    })
};
