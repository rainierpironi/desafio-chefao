'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('destinos', [{
        nome_regiao: 'Norte',
        nome_estado: 'Acre',
        nome_cidade: 'Uberlândia',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
