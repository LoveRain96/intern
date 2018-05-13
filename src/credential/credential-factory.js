const Credential = require('./credential');

class CredentialFactory {

    makeFromDB(credentialRawData) {
        let credential = new Credential(credentialRawData.code);
        credential.setId(credentialRawData.id);
        credential.setRole(credentialRawData.role);
        credential.setPassword(credential.password);
        return credential;
    }
}

module.exports = CredentialFactory;
