exports.up = function (knex) {
  return knex.schema.createTable('events', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('time')
    table.string('date')
    table.string('location')
    table.string('description')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('events')
}
