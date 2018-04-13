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
    create(companyManager) {
        return this.connection('companyManagers').insert({
            name : companyManager.getName(),
            gender : companyManager.getGender(),
            company_id: companyManager.getCompany().getId(),
            phone : companyManager.getContact().getPhone(),
            email : companyManager.getContact().getEmail(),
            address : companyManager.getAddress()
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