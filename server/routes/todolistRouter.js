const Router = require('express')
const router = new Router()
const TodoListController = require('../controllers/todolistController')

router.get('/list', TodoListController.getAll)
router.post('/create', TodoListController.createTodo)

module.exports = router
