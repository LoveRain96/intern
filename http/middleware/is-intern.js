module.exports = function (request, response, next) {
    request.app.get('user.provider').get(request.body.account).then(result => {
        request.user = CourseFactory.makeFromDB(result[0]);
        next();
    })
};
