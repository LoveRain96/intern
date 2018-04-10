class LecturerRepository {

    constructor(connection, lecturerFactory) {
        this.connection = connection;
        this.lecturerFactory = lecturerFactory;
    }

    get(id) {
        return this.connection('lecturers').where('id',id)
            .then(lecturer=>this.lecturerFactory.makeFromDB(lecturer[0]))
    }
}
module.exports = LecturerRepository;