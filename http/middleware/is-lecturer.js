module.exports = function (request, response, next) {
    request.app.get('lecturer.provider').get(request.body.account).then(result => {
        request.user = CourseFactory.makeFromDB(result[0]);
        next();
    })
};
