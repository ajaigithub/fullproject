var sequelize = require('sequelize');

// Option 1: Passing parameters separately
var sequelize = new sequelize('exp', 'root', 'Password@123', {
  host: 'localhost',
  dialect:  'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
global.sequelize=sequelize;
