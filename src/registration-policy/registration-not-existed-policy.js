class RegistrationNotExistedPolicy {
    constructor(connection) {
        this.connection = connection;
    }

    check(itern, internship) {
        return this.connection('registrations').where({
            intern_id : itern.getId(),
            internship_id : internship.getId()
        }).then(registrationRawData=>{
            return !registrationRawData.length
        })
    }
}

module.exports = RegistrationNotExistedPolicy;
