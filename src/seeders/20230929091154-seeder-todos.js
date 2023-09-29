'use strict';

// const { now } = require('sequelize/types/utils');

// /** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Todos',
    [
      {
        name: 'this day',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'tomorow',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'this week',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Todos', null)
  }
};
