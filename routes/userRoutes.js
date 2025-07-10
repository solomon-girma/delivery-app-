const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected route
router.get('/profile', protect, (req, res) => {
  res.json({ message: 'You are authorized', user: req.user });
});

router.post('/logout', (req, res) => {
  // Client should remove token, this just helps indicate logout success
  res.status(200).json({ message: 'User logged out successfully!' });
});



module.exports = router;






