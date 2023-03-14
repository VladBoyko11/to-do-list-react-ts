const Router = require('express')
const router = new Router()
const todolistRouter = require('./todolistRouter')

router.use('/todolist', todolistRouter)

module.exports = router
