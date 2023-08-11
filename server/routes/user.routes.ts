const Router = require('express')
const router = new Router()
const userController =require('../controller/user.controller')

router.post('/user', userController.addUser)
router.get('/user/all', userController.getUsers)
router.put('/user', userController.updateUser)
router.delete('/user/:id', userController.deleteUser)

module.exports = router