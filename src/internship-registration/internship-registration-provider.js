const status = require('../statuses');
class InternShipRegistrationRepository {
    /**
     *
     * @param {Connection} connection
     * @param internFactory
     */
    constructor(connection, internFactory) {
        this.connection    = connection;
        this.internFactory = internFactory;
    }

    /**
     * @param {int} internship_id
     */

    getListPENDING(internship_id) {
        return this.connection
            .select('interns.lastName','interns.firstName', 'interns.code', 'interns.gender', 'interns.phone', 'interns.phoneParent', 'interns.address', 'interns.email', 'registrations.status')
            .from('registrations')
            .leftJoin('interns', function () {
                this.on('registrations.intern_code', '=', 'interns.code')
            }).where({internship_id : internship_id, status : status.PENDING
            }).then(interns => interns.map(this.internFactory.makeFromDB))
    }
    getCONFIRMED(internship_id) {
        return this.connection
            .select('interns.lastName','interns.firstName', 'interns.code', 'interns.gender', 'interns.phone', 'interns.phoneParent', 'interns.address', 'interns.email', 'registrations.status')
            .from('registrations')
            .leftJoin('interns', function () {
                this.on('registrations.intern_code', '=', 'interns.code')
            }).where({internship_id : internship_id, status : status.CONFIRMED
            }).then(interns => interns.map(this.internFactory.makeFromDB))
    }
}

module.exports = InternShipRegistrationRepository;