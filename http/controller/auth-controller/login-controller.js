const LoginError = require('../../../src/credential/login-error');

class LoginController {

    async login(request, response) {
        try {
            let credentialServices = request.app.get('credential.services');
            let authSession        = request.app.get('authSession');
            let credential         = await credentialServices.getCredential(request.authenticate);
            authSession.login(credential);
            response.json({
                type : 'success',
                url  : 'home'
            });
        }catch(err) {
            if(err instanceof LoginError){
                return response.json({
                    type : err,
                    message : err.message
                });
            }
        }

    }

    async logout(request, response) {

    }
}
module.exports = LoginController;