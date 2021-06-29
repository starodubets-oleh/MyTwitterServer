const faker = require('faker');

exports.seed = function(knex) {
  return knex('comments').insert([
    { id: 1, content: faker.lorem.slug(), user_id: 1, post_id: 1 },
    { id: 2, content: faker.lorem.slug(), user_id: 2, post_id: 2 },
    { id: 3, content: faker.lorem.slug(), user_id: 3, post_id: 3 }
  ]);
};
