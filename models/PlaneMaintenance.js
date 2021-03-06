const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const PlaneMaintenance = sequelize.define('planemaintenance', {

  id: 
  {
    type: Sequelize.STRING,
    autoIncrement:true,
    allowNull: false,
    primaryKey: true
  },

  name: Sequelize.STRING,
  duration: Sequelize.TIME,

});

module.exports = PlaneMaintenance;
