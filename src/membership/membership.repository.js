import { prisma } from "../config/prisma.js";


export const findAllMembership = async () => {
  return await prisma.membership.findMany({
    // include: {
    //   payments: true
    // }
  })
}

export const findMembershipById = async (id) => {
  return await prisma.membership.findUnique({
    where: {id},
    include: {
      payments: true,
      users: true
    }
  })
}

export const createMembership = async (membershipData) => {
 return await prisma.membership.create({
  data: membershipData
 })
}

export const findMembershipByName = async (name) => {
  return await prisma.membership.findFirst({
    where: {
      name
    }
  })
}

export const updateMembership = async (id, membershipData) => {
  return await prisma.membership.update({
    where:{
      id
    }
    ,
    data: {
    }
  })
}