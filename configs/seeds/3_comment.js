
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('table_name').del()
  //   .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {id: 1, content: 'rowValue14564654', user_id: 1, post_id: 1},
        {id: 2, content: 'rowValue2sdf456sd4f65', user_id: 2, post_id: 2},
        {id: 3, content: 'rowValue365s4df564s65df', user_id: 3, post_id: 3}
      ])
    // });
};
