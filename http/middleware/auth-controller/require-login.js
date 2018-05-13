module.exports = async function(request, response, next) {
    let authSession = request.app.get('authSession');

    if(authSession.isGuest()){
        return response.redirect('/loginView');
    }
    await next();
};