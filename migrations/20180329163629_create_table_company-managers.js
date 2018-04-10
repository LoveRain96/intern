
exports.up = function(knex, Promise) {
    return knex.schema.createTable('companyManagers', function (table) {
        table.increments('id');
        table.string('name').notNull();
        table.string('phone');
        table.string('company_id');
        table.string('gender');
        table.string('email');
        table.string('address');
        table.string('deleted_at');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('companyManagers');
};
