import { prisma } from "../config/prisma.js";


export const findAllUser = async () => {
  return await prisma.user.findMany()
}

export const findUserById = async (id) => {
  return await prisma.user.findUnique({
    where: {id}
  })
}

export const createUser = async (userData) => {
 return await prisma.user.create({
  data: userData
 })
}

export const findUserByName = async (name) => {
  return await prisma.user.findFirst({
    where: {
      name
    }
  })
}

export const updateUser = async (id, userData) => {
  return await prisma.user.update({
    where:{
      id
    }
    ,
    data: {
       name: userData.name,
       email: userData.email,
       password:  userData.password,
       phoneNumber: userData.phoneNumber,
       membershipId: userData.membershipId,
       membership: userData.membership,
       payments: userData.payment
    }
  })
}