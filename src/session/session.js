module.exports = function (request, response, next) {
    request.app.get('user.repository').get(request.body).then(result => {
        if(!result.length) {
            response.json()
        }
    })
};
