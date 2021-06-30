const faker = require('faker');

exports.seed = function(knex) {
  return knex('posts').insert([
    { id: 1, content: faker.lorem.sentence(), user_id: 1 },
    { id: 2, content: faker.lorem.sentence(), user_id: 2 },
    { id: 3, content: faker.lorem.sentence(), user_id: 3 },
    { id: 4, content: faker.lorem.sentence(), user_id: 1 },
    { id: 5, content: faker.lorem.sentence(), user_id: 2 },
    { id: 6, content: faker.lorem.sentence(), user_id: 3 },
    { id: 7, content: faker.lorem.sentence(), user_id: 1 },
    { id: 8, content: faker.lorem.sentence(), user_id: 2 },
    { id: 9, content: faker.lorem.sentence(), user_id: 3 },
  ]);
};
