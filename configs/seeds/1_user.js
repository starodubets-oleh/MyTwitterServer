const bcryptjs = require('bcryptjs');
const faker = require('faker');

exports.seed = function(knex) {
  return knex('users').insert([
    { id: 1, name: faker.name.findName(), email: faker.internet.email(), password: bcryptjs.hashSync('12345678', 7) },
    { id: 2, name: faker.name.findName(), email: faker.internet.email(), password: bcryptjs.hashSync('12345678', 7) },
    { id: 3, name: faker.name.findName(), email: faker.internet.email(), password: bcryptjs.hashSync('12345678', 7) },
  ]);
};
