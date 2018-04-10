
exports.up = function(knex, Promise) {
  return knex.schema.createTable('registrations', function (table) {
      table.increments('id');
      table.string('intern_code').notNull();
      table.string('internship_id').notNull();
      table.string('status');
      table.datetime('deleted_at');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('registrations');
};
