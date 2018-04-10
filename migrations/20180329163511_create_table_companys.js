
exports.up = function(knex, Promise) {
    return knex.schema.createTable('companies', function (table) {
        table.increments('id');
        table.string('name').notNull();
        table.string('phone');
        table.string('email');
        table.string('address');
        table.string('deleted_at');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('companies');
};
