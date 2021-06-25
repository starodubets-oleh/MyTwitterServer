
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('posts').del()
  //   .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {id: 1, content: 'rowValue1', user_id: 1},
        {id: 2, content: 'rowValue2', user_id: 2},
        {id: 3, content: 'rowValue3', user_id: 3}
      ]);
    // });
};
