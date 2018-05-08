class LecturerRepository {

    constructor(connection, lecturerFactory) {
        this.connection = connection;
        this.lecturerFactory = lecturerFactory;
    }

    get(id) {
        return this.connection('lecturers').where({
            id : id,
            deleted_at : null
        }).then(lecturer=>this.lecturerFactory.makeFromDB(lecturer[0]))
    }
    all() {
        return this.connection('lecturers').where('deleted_at',null)
            .then(lecturers => lecturers.map(this.lecturerFactory.makeFromDB))
    }
}
module.exports = LecturerRepository;