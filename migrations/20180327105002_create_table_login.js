
exports.up = function(knex, Promise) {
    return knex.schema.createTable('login', function (table) {
        table.string('user_id').primary();
        table.string('password').notNull();
        table.string('role');
        table.date('archived_at');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('login');
};
