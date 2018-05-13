const bcrypt = require('bcrypt');

class Encoder {

    constructor(){
        this.saltRounds = 10;
    }

    /**
     *
     * @param {String} pass
     * @param {String} hash
     * @return {boolean}
     */
    async compare(pass, hash) {
        return await bcrypt.compare(pass, hash);
    }

    /**
     *
     * @param {String} pass
     * @return {Promise<*>}
     */
    async hash(pass) {
        return await bcrypt.hash(pass, this.saltRounds);
    }
}

module.exports = Encoder;
