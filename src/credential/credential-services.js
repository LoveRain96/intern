const LoginError = require('./login-error');

class CredentialServices {

    constructor(credentialFactory, connection , hash) {
        this.credentialFactory = credentialFactory;
        this.connection = connection;
        this.hash = hash;
    }

    async getCredential(authenticate) {
        let credential = await this.connection('credentials').where({code : authenticate.code});
        if(!credential.length) {
            throw new LoginError('Account not exist');
        }

        if(!await this.hash.compare(authenticate.password, credential[0].password)) {
            throw new LoginError('Password not match!');
        }

        return this.credentialFactory.makeFormDB(credential[0]);
    }

    async getCredentialById(id) {
        let credential = this.connection('credentials').where({id : id});
        return this.credentialFactory.makeFormDB(credential[0]);
    }
}

module.exports = CredentialServices;
