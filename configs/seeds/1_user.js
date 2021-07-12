const bcryptjs = require('bcryptjs');
const faker = require('faker');

const arr = [ ...Array(50).keys() ];

exports.seed = function(knex) {
  return knex('users').del().then(() => {
    return knex('users').insert(
      arr.reduce((acc, item) => {
        acc.push({
          id: item + 1,
          name: faker.name.findName(),
          email: faker.internet.email(),
          password: bcryptjs.hashSync('12345678', 7),
          user_img: `${Math.ceil(Math.random() * 3)}.jpeg`
        });
        return acc;
      }, [])
    );
  });
};
