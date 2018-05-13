class Credential {

    constructor(code) {
        this.code = code;
    }

    getCode() {
        return this.code;
    }

    setId(id) {
        this.id = id;
    }

    setPassword(password){
        this.password = password;
    }

    getPassword() {
        return this.password;
    }

    setRole(role){
        this.role = role;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Credential;
