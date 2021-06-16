'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Posts', [{
      post: 'Suppose we want to insert some data into a few tables by default. If we follow up on previous example we can consider creating a demo user for User table',
      createdAt: new Date(),
      updatedAt: new Date()
    }], 
    {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Posts', null, {});
  }
};
