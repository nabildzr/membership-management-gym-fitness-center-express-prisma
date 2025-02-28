import { createMembership, findAllMembership, findMembershipById, findMembershipByName, updateMembership } from "./membership.repository.js"
import bcrypt, { hash } from 'bcrypt'


export const getAllMembership = async () => {
  const memberships = findAllMembership()  
  
  return memberships;
}

export const getMembershipById = async (id) => {
  const membership = await findMembershipById(id);

  if (!membership) {
    throw Error(`ID ${id} is not Registered`)
  }

  return membership
}

export const registerMembership = async (membershipData) => {
  const membershipExist = await findMembershipByName(membershipData.name)

  if (membershipExist) {
    throw Error("Membership Already Exist")
  }

  return await createMembership(membershipData);
}

export const editMembership = async (id, membershipData) => {
  await findMembershipById(id)

  return await updateMembership(id, membershipData)
}