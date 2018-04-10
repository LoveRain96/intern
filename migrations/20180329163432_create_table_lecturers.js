
exports.up = function(knex, Promise) {
    return knex.schema.createTable('lecturers', function (table) {
        table.string('code').primary();
        table.string('name').notNull();
        table.string('gender');
        table.string('phone');
        table.string('email');
        table.string('address');
        table.string('deleted_at');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('lecturers');
};
