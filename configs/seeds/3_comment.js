const faker = require('faker');

exports.seed = function(knex) {
  return knex('comments').insert([
    { id: 1, content: faker.lorem.slug(), user_id: 1, post_id: 1 },
    { id: 2, content: faker.lorem.slug(), user_id: 2, post_id: 2 },
    { id: 3, content: faker.lorem.slug(), user_id: 3, post_id: 3 },
    { id: 4, content: faker.lorem.slug(), user_id: 1, post_id: 4 },
    { id: 5, content: faker.lorem.slug(), user_id: 2, post_id: 5 },
    { id: 6, content: faker.lorem.slug(), user_id: 3, post_id: 6 },
    { id: 7, content: faker.lorem.slug(), user_id: 1, post_id: 7 },
    { id: 8, content: faker.lorem.slug(), user_id: 2, post_id: 8 },
    { id: 9, content: faker.lorem.slug(), user_id: 3, post_id: 9 },
  ]);
};
