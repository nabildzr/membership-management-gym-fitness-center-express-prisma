import logger from "../config/logger.js";
import { editUser, getAllUser, getUserById, registerUser }  from "./user.service.js";

class UserController {
  constructor() {
    this.get = this.get.bind(this);
  }

  getAll = async (req, res) => {
    try {
      const user = await getAllUser()

      res.status(200).json({
        data: user,
        message: 'User data retrieved successfully'
      })
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving user data', error: error.message });
    }
  }

  get = async (req, res) => {
    try {
      const userId = req.params.id
      const user = await getUserById(userId)
      
      res.status(200).json({ data: user ,message: 'User data retrieved successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving user data', error: error.message });
    }
  }

  create = async (req, res) => {
    try {
      const userData = req.body;
      const newUser = await registerUser(userData);
      
      res.status(201).json({ data: newUser, message: 'User created successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error creating user', error: error.message });
    }
  }

  update = async (req, res) => {
    try {
      const userId = req.params.id
      const userData = req.body;

      const user = await editUser(userId, userData)

      res.status(201).json({ data: user, message: "User updated successfully"})
    } catch(error) {
      res.status(500).json({ message: 'Error updating user', error: error.message });
    }
  }
}

export default new UserController();
