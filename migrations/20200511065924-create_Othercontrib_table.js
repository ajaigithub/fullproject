'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Othercontrib',{
      
            name:{
              type:Sequelize.STRING,
        
        
            },
            description:{type:Sequelize.STRING
        
            },
            amount:{
        type:Sequelize.INTEGER
            },
            
    })
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('Othercontrib');
  
  }
};