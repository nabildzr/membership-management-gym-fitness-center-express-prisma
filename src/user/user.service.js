import { createUser, findAllUser, findUserById, findUserByName, updateUser } from "./user.repository.js"
import bcrypt, { hash } from 'bcrypt'


export const getAllUser = async () => {
  const user = findAllUser()  
  
  return user;
}

export const getUserById = async (id) => {
  const user = await findUserById(id);

  if (!user) {
    throw Error(`ID ${id} is not Registered`)
  }

  return user
}

export const registerUser = async (userData) => {
  const userExist = await findUserByName(userData.name)

  if (userExist) {
    throw Error("User Already Exist")
  }

  const hashedPassword = await bcrypt.hash(userData.password, 10)
  userData.password = hashedPassword

  return await createUser(userData);
}

export const editUser = async (id, userData) => {
  const user = await findUserById(id)


  if(userData.password) {
    const isPasswordMatch = await bcrypt.compare(userData.password, user.password);
  if (!isPasswordMatch) {
    const hashedPassword = await bcrypt.hash(userData.password, 10)
    userData.password = hashedPassword
  } else {
    userData.password = user.password
  }
  }

  return await updateUser(id, userData)
}