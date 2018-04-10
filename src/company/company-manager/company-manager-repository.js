class CompanyManagerRepository {

    constructor(connection, companyManagerFactory) {
        this.connection     = connection;
        this.companyManagerFactory = companyManagerFactory;
    }
    searchByName(name) {
        return this.connection('companyManagers')
            .where({name : name, deleted_at : null}).then(result =>this.companyManagerFactory.makeFromDB(result[0]));
    }
    get(id) {
        return this.connection('companyManagers')
            .where({id : id, deleted_at : null}).then(result =>this.companyManagerFactory.makeFromDB(result[0]));
    }
    all() {
        return this.connection('companyManagers')
            .where({deleted_at : null}).then(results => results.map(this.companyManagerFactory.makeFromDB))
    }
    create(company) {
        return this.connection('companyManagers').insert({
            name : company.getName(),
            gender : company.getGender(),
            phone : company.getContact().getPhone(),
            email : company.getContact().getEmail(),
            address : company.getAddress()
        }).then(companyId => {
            company.setId(companyId);
            return company;
        })
    }
    update(company) {
        return this.connection('companyManagers').update({
            name : company.getName(),
            gender : company.getGender(),
            phone : company.getContact().getPhone(),
            email : company.getContact().getEmail(),
            address : company.getAddress()
        }).where('id', company.getId())
    }
    remove(id) {
        return this.connection('companyManagers').update({
            deleted_at : new Date().toLocaleString()
        }).then(result=>result)
    }
}
module.exports = CompanyManagerRepository;