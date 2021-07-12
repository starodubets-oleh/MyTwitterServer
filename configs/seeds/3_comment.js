const faker = require('faker');

const arr = [ ...Array(100000).keys() ];

exports.seed = function(knex) {
  return knex('comments').del().then(() => {
    return knex('comments').insert(
      arr.reduce((acc, item) => {
        acc.push({
          id: item + 1,
          content: faker.lorem.slug(),
          user_id: Math.ceil(Math.random() * 50),
          post_id: Math.ceil(Math.random() * 5000)
        });
        return acc;
      }, [])
    );
  });
};
