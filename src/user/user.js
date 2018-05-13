class User {
    constructor(account, password, role) {
        this.account = account;
        this.password = password;
        this.role = role;
    }
    getAccount() {
        return this.account;
    }
    getPassword() {
        return this.password;
    }
    getRole() {
        return this.role;
    }
}
module.exports = User;