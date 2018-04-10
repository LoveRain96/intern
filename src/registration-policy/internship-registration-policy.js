const status = require('../statuses');
class InternShipRegistrationPolicy {

    check(user, course) {
        return user.getRole()==='STUDENT' && course.getStatus() === status.OPEN;
    }
}
module.exports = InternShipRegistrationPolicy;