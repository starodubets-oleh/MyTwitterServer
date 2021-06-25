
const bcryptjs = require('bcryptjs');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('table_name').del()
  //   .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'test1', email: 'oleh@rezet.ua', password: bcryptjs.hashSync('12345678', 7)},
        {id: 2, name: 'test2', email: 'oleh@rezet.com', password: bcryptjs.hashSync('12345678', 7)},
        {id: 3, name: 'test3', email: 'oleh@rezet.biz', password: bcryptjs.hashSync('12345678', 7)}
      ]);
    // });
};
