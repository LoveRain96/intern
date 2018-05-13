const AuthSession = require('./auth-session');

module.exports = function(app) {
    app.set('auth.session', new AuthSession());
    app.use(async function(request, response, next){
        let authSession  = request.app.get('auth.session');
        let userServices = request.app.get('user.services');
        authSession.setSession(request.session);
        if(!authSession.check()){
            let user = await userServices.getUserByCredential(request.session.credential);
            request.user = user;
        }
        await next();
    });
};
