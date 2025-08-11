import express from 'express';
import User from '../models/user'; // Adjust path if needed

const router = express.Router();

// GET /api/users — fetch all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find({}, '-password'); // Exclude password
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch users' });
  }
});

export default router;
