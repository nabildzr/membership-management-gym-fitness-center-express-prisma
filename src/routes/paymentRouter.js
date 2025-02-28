import express from 'express'
import PaymentController from '../payment/payment.controller.js'

const paymentRouter = express.Router()

paymentRouter.get('/', PaymentController.getAll)
paymentRouter.get('/:id', PaymentController.get)
paymentRouter.post('/createPayment', PaymentController.create)
paymentRouter.patch('/:id', PaymentController.update)

export default paymentRouter