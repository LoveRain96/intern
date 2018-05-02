
const Company = require('./company');

class CompanyRepository {

    constructor(connection, companyFactory) {
        this.connection     = connection;
        this.companyFactory = companyFactory;
    }

    searchByKeyword(keyword) {
        return this.connection('companies').select()
            .where('name', 'like', '%' + keyword + '%')
            .orWhere('phoneManager', 'like', '%' + keyword + '%')
            .orWhere('emailManager', 'like', '%' + keyword + '%')
            .orWhere('address', 'like', '%' + keyword + '%')
            .orWhere('nameManager', 'like', '%' + keyword + '%')
            .where({
                deleted_at : null
            })
            .then(results =>results.map(this.companyFactory.makeFromDB));
    }
    get(id) {
        return this.connection('companies')
            .where({id : id, deleted_at : null}).then(result => result.map(this.companyFactory.makeFromDB));
    }
    all() {
        return this.connection('companies')
            .where({deleted_at : null}).then(results =>results.map(this.companyFactory.makeFromDB))
    }
    create(company) {
        return this.connection('companies').insert({
            name : company.getName(),
            phoneManager : company.getContact().getPhone(),
            emailManager : company.getContact().getEmail(),
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
            phoneManager : company.getContact().getPhone(),
            emailManager : company.getContact().getEmail(),
            address : company.getAddress(),
            nameManager : company.getNameManager()
        }).where({id : company.getId()}).then(()=>company)
    }
    remove(id) {
        return this.connection('companies').update({
            deleted_at : new Date().toLocaleString()
        }).where({
            id: id
        }).then(()=>id)
    }
}
module.exports = CompanyRepository;