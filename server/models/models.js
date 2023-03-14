const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const todoList = sequelize.define('todolist', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    todoText: {type: DataTypes.STRING},
    todoStatus: {type: DataTypes.BOOLEAN, defaultValue: false}
}, {
    freezeTableName: true,
    timestamps: false
})

module.exports = {
    todoList
}
