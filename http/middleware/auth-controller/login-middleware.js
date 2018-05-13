module.exports = async function(request, response, next) {
    request.authenticate = {
        code : request.body.code,
        password : request.body.password
    };
    await next();
};
