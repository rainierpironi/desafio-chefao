'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('comentarios', [{
      nome: 'John Doe',
      email: 'teste@email.com',
      mensagem: 'teste de mensagem',
      destinos_id: 1,
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
