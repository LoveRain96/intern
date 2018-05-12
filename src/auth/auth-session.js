class AuthSession {
    constructor(session) {
        this.session = session;
    }

    login(credential){
        this.session.credentialId = credential.getId();
    }

    check() {
        return !this.session['credentialId'];
    }

    isGuest() {
        return this.check();
    }
}

module.exports = AuthSession;
