class UserProvider {
    constructor(connection) {
        this.connection = connection;
    }
    getIntern(user_code) {
        return this.connection('interns').where({
            code : user_code
        }).then(result => {

        })
    }
}
module.exports = UserProvider;