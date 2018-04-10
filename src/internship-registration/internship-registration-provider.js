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

    getPENDING(internship_id) {
        return this.connection
            .select('interns.id', 'interns.name', 'interns.sex', 'interns.phone', 'interns.address', 'interns.email', 'registrations.status')
            .from('registrations')
            .leftJoin('interns', function () {
                this.on('registrations.intern_id', '=', 'interns.id')
            }).where({internship_id : internship_id, status : status.PENDING
            }).then(interns => interns.map(this.internFactory.makeFromDB))
    }
    getCONFIRMED(internship_id) {
        return this.connection
            .select('interns.id', 'interns.name', 'interns.sex', 'interns.phone', 'interns.address', 'interns.email', 'registrations.status')
            .from('registrations')
            .leftJoin('interns', function () {
                this.on('registrations.intern_id', '=', 'interns.id')
            }).where({internship_id : internship_id, status : status.CONFIRMED
            }).then(interns => interns.map(this.internFactory.makeFromDB))
    }
}

module.exports = InternShipRegistrationRepository;