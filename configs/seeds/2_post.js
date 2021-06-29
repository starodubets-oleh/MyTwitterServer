const faker = require('faker');

exports.seed = function(knex) {
  return knex('posts').insert([
    { id: 1, content: faker.lorem.sentence(), user_id: 1 },
    { id: 2, content: faker.lorem.sentence(), user_id: 2 },
    { id: 3, content: faker.lorem.sentence(), user_id: 3 }
  ]);
};
