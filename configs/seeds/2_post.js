const faker = require('faker');

const arr = [ ...Array(5000).keys() ];

exports.seed = function(knex) {
  return knex('posts').del().then(() => {
    return knex('posts').insert(
      arr.reduce((acc, item) => {
        acc.push({
          id: item + 1,
          content: faker.lorem.sentence(),
          user_id: Math.ceil(Math.random() * 50)
        });
        return acc;
      }, [])
    );
  });
};
