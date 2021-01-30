const Sequelize = require('sequelize')
const db = require('../db')

const ChecklistItem = db.define('checklistItem', {
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [1, 150]
    }
  },
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = ChecklistItem
