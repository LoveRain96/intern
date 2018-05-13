class AuthSession {

    setSession(session) {
        this.session = session;
    }

    login(credential){
        this.session.credential = credential;
    }

    check() {
        return !this.session.credential;
    }

    isGuest() {
        return this.check();
    }
}

module.exports = AuthSession;
