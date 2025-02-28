import express from 'express'
import membershipController from '../membership/membership.controller.js'

const membershipRouter = express.Router()

membershipRouter.get('/', membershipController.getAll)
membershipRouter.get('/:id', membershipController.get)
membershipRouter.post('/createMembership', membershipController.create)
membershipRouter.patch('/:id', membershipController.update)

export default membershipRouter