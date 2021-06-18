'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'John Doe',
          email: 'JohnDoe@domen.com',
          password: '123456'
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('users', null, {});
  }
};
