class CompanyRepository {

    constructor(connection, companyFactory) {
        this.connection     = connection;
        this.companyFactory = companyFactory;
    }

    searchByName(keyword) {
        return this.connection('companies').select()
            .where('name', 'like', '%' + keyword + '%')
            .orWhere('phone', 'like', '%' + keyword + '%')
            .orWhere('email', 'like', '%' + keyword + '%')
            .orWhere('address', 'like', '%' + keyword + '%')
            .where({
                deleted_at : null
            })
            .then(results =>results.map(this.companyFactory.makeFromDB));
    }
    get(id) {
        return this.connection('companies')
            .where({id : id, deleted_at : null}).then(result =>this.companyFactory.makeFromDB(result[0]));
    }
    all() {
        return this.connection('companies')
            .where({deleted_at : null}).then(results =>results.map(this.companyFactory.makeFromDB))
    }
    create(company) {
        return this.connection('companies').insert({
            name : company.getName(),
            phone : company.getContact().getPhone(),
            email : company.getContact().getEmail(),
            address : company.getAddress(),
            nameManager : company.getNameManager()
        }).then(companyId => {
            company.setId(companyId);
            return company;
        })
    }
    update(company) {
        return this.connection('companies').update({
            name : company.getName(),
            phone : company.getContact().getPhone(),
            email : company.getContact().getEmail(),
            address : company.getAddress(),
            nameManager : company.getNameManager()
        }).where('id', company.getId())
    }
    remove(id) {
        return this.connection('companies').update({
            deleted_at : new Date().toLocaleString()
        }).where({
            id: id
        }).then(result=>result)
    }
}
module.exports = CompanyRepository;