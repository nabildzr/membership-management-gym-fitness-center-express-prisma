import { prisma } from "../config/prisma.js";


export const findAllPayment = async () => {
  return await prisma.payment.findMany()
}

export const findPaymentById = async (id) => {
  return await prisma.payment.findUnique({
    where: {id}
  })
}

export const createPayment = async (paymentData) => {
 return await prisma.payment.create({
  data: paymentData
 })
}

export const findPaymentByName = async (name) => {
  return await prisma.payment.findFirst({
    where: {
      name
    }
  })
}

export const updatePayment = async (id, paymentData) => {
  return await prisma.payment.update({
    where:{
      id
    }
    ,
    data: {
    }
  })
}