module.exports = async function(request, response, next) {
    let authSession = request.app.get('authSession');
    if(!authSession.check()) {
        return response.redirect('/home');
    }
    await next();
};
