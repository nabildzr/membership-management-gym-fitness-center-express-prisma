import { getMembershipById } from "../membership/membership.service.js";
import { updateUser } from "../user/user.repository.js";
import { getUserById } from "../user/user.service.js";
import { createPayment, findAllPayment, findPaymentById, findPaymentByName, updatePayment } from "./payment.repository.js"
import bcrypt, { hash } from 'bcrypt'


export const getAllPayment = async () => {
  const payments = findAllPayment()  
  
  return payments;
}

export const getPaymentById = async (id) => {
  const payment = await findPaymentById(id);

  if (!payment) {
    throw Error(`ID ${id} is not Registered`)
  }

  return payment
}

export const registerPayment = async (paymentData) => {
  const membership = await getMembershipById(paymentData.membershipId);
  const user = await getUserById(paymentData.userId);

  if (paymentData.amountPaid >= membership.price) {
    paymentData.paymentStatus = 'Fully paid';
  } else {
    paymentData.paymentStatus = 'Not yet paid in full';
  }

  const validUntilDate = new Date();
  validUntilDate.setDate(validUntilDate.getDate() + 30);
  paymentData.validUntil = validUntilDate.toISOString();

  const newPayment = await createPayment(paymentData);

  await updateUser(user.id, {
    membership: {
      connect: { id: membership.id }
    },
  });

  return newPayment;
};

export const editPayment = async (id, paymentData) => {
  await findPaymentById(id)

  return await updatePayment(id, paymentData)
}