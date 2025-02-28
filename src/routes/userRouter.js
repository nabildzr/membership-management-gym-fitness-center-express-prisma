import express from 'express'
import userController from '../user/user.controller.js'

const userRouter = express.Router()

userRouter.get('/', userController.getAll)
userRouter.get('/:id', userController.get)
userRouter.post('/createUser', userController.create)
userRouter.patch('/:id', userController.update)
userRouter.put('/:id', userController.update)
export default userRouter