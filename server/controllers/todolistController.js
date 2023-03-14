const {todoList} = require('../models/models')
const ApiError = require('../error/ApiError');

class TodoListController {
    async getAll(req, res) {
        const todo = await todoList.findAll()
        return res.json(todo)
    }
    async createTodo(req, res) {
        const {todoText, todoStatus} = req.body
        const createdTodo = await todoList.create({todoText, todoStatus})
        return res.json(createdTodo)
    }
}

module.exports = new TodoListController()
