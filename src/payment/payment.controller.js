import logger from "../config/logger.js";
import { editPayment, getAllPayment, getPaymentById, registerPayment }  from "./payment.service.js";

class PaymentController {
  constructor() {
    this.get = this.get.bind(this);
  }

  getAll = async (req, res) => {
    try {
      const payments = await getAllPayment()

      res.status(200).json({
        data: payments,
        message: 'Payment data retrieved successfully'
      })
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving payment data', error: error.message });
    }
  }

  get = async (req, res) => {
    try {
      const paymentId = req.params.id
      const payment = await getPaymentById(paymentId)
      
      res.status(200).json({ data: payment ,message: 'Payment data retrieved successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving payment data', error: error.message });
    }
  }

  create = async (req, res) => {
    try {
      const paymentData = req.body;
      const newPayment = await registerPayment(paymentData);
      
      res.status(201).json({ data: newPayment, message: 'Payment created successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error creating payment', error: error.message });
    }
  }

  update = async (req, res) => {
    try {
      const paymentId = req.params.id
      const paymentData = req.body;

      const payment = await editPayment(paymentId, paymentData)

      res.status(201).json({ data: payment, message: "Payment updated successfully"})
    } catch(error) {
      res.status(500).json({ message: 'Error updating payment', error: error.message });
    }
  }
}

export default new PaymentController();
