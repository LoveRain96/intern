
exports.up = function(knex, Promise) {
    return knex.schema.createTable('courses', function (table) {
        table.increments('id');
        table.string('name').notNull();
        table.string('startDate').notNull();
        table.string('endDate').notNull();
        table.string('status');
        table.string('deleted_at');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('courses');
};
