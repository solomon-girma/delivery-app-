const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const db = require('../config/db'); // your DB connection
const authenticate = require('../middleware/authenticate'); // JWT middleware

// GET /vendors/parcel
router.get('/parcel', authenticate, async (req, res) => {
  try {
    const [rows] = await db.query("SELECT id, name, phone, address FROM vendors WHERE type = 'parcel' AND status = 'approved'");
    res.json({ success: true, data: rows });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
