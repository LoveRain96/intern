
module.exports = function (request , response , next) {
    request.app.get('Registration.not.existed.policy')
        .check(request.user, request.internship).then(result => {
        if(result) {
            next();
        }
        response.json({message : 'not success'})
    })
};

