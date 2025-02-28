import logger from "../config/logger.js";
import { editMembership, getAllMembership, getMembershipById, registerMembership }  from "./membership.service.js";

class MembershipController {
  constructor() {
    this.get = this.get.bind(this);
  }

  getAll = async (req, res) => {
    try {
      const memberships = await getAllMembership()

      res.status(200).json({
        data: memberships,
        message: 'Membership data retrieved successfully'
      })
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving membership data', error: error.message });
    }
  }

  get = async (req, res) => {
    try {
      const membershipId = req.params.id
      const membership = await getMembershipById(membershipId)
      
      res.status(200).json({ data: membership ,message: 'Membership data retrieved successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving membership data', error: error.message });
    }
  }

  create = async (req, res) => {
    try {
      const membershipData = req.body;
      const newMembership = await registerMembership(membershipData);
      
      res.status(201).json({ data: newMembership, message: 'Membership created successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error creating membership', error: error.message });
    }
  }

  update = async (req, res) => {
    try {
      const membershipId = req.params.id
      const membershipData = req.body;

      const membership = await editMembership(membershipId, membershipData)

      res.status(201).json({ data: membership, message: "Membership updated successfully"})
    } catch(error) {
      res.status(500).json({ message: 'Error updating membership', error: error.message });
    }
  }
}

export default new MembershipController();
