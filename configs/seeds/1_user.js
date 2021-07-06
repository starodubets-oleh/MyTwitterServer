const bcryptjs = require('bcryptjs');
const faker = require('faker');

exports.seed = function(knex) {
  return knex('users').insert([
    { id: 1, name: faker.name.findName(), email: faker.internet.email(), password: bcryptjs.hashSync('12345678', 7), user_img: '1.jpeg' },
    { id: 2, name: faker.name.findName(), email: faker.internet.email(), password: bcryptjs.hashSync('12345678', 7), user_img: '2.jpeg' },
    { id: 3, name: faker.name.findName(), email: faker.internet.email(), password: bcryptjs.hashSync('12345678', 7), user_img: '3.jpeg' },
  ]);
};
