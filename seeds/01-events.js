exports.seed = async function (knex) {
  return knex('events')
    .del()
    .then(() => {
      return knex('events').insert([
        { id: 1, name: 'afternoon hangs till late', time: '3pm-11pm' },
        { id: 2, name: 'morning rave', time: '6am-9am' },
        { id: 3, name: 'Arctic Monkeys', time: '12pm-12am' },
      ])
    })
}
