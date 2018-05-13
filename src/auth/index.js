const AuthSession = require('./auth-session');

module.exports = function(app) {
    app.set('auth.session', new AuthSession());
};
