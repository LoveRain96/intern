module.exports = function (request, response, next) {
    request.app.get('lecturer.provider').get(request.body.account).then(result => {
        request.user = request.app.get('lecturer.factory').makeFromDB(result[0]);
        next();
    })
};
