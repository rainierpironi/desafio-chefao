'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  
     await queryInterface.bulkInsert('Destinos', [{
       nome_regiao: 'Sudeste',
       nome_estado: 'São Paulo',
       nome_cidade: 'São Paulo',
       createdAt: new Date(),
      updatedAt: new Date()
     },

     {
      nome_regiao: 'Nordeste',
      nome_estado: 'Bahia',
      nome_cidade: 'Salvador',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nome_regiao: 'Sul',
      nome_estado: 'Santa Catarina',
      nome_cidade: 'Florianópolis',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    
    ], {});
    
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
