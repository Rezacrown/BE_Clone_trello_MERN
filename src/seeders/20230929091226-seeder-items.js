'use strict';

/** @type {import('sequelize-cli').Migration} */


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
    await queryInterface.bulkInsert('Items', [
      {
        name: 'belajar',
        todos_id: 1,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
      {
        name: 'makan',
        todos_id: 3,
        createdAt: Date.now(),
        updatedAt: Date.now(),
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

    // wajib buat untuk down nya
    await queryInterface.bulkDelete('Items', null)
  }
};
