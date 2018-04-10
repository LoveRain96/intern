module.exports = function (request, response, next) {
    request.app.get('user.provider').get(request.body.account).then(result => {
        request.user = request.app.get('intern.factory').makeFromDB(result[0]);
        next();
    })
};
