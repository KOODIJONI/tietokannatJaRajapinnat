const express = require('express');
const router = express.Router();
const register = require('../models/register_model'); // Assuming this contains the addUser function

// Register user route
router.post('/', (req, res) => {
  if (req.body.username && req.body.password) {
    const user = req.body;

    register.addUser(user, (error, dbResult) => {
      if (error) {
        if (error.message === 'Username is already taken.') {
          res.status(400).json({ error: error.message });  // Return a 400 status for duplicate username
        } else {
          res.status(500).json({ error: error.message });  // Handle other errors
        }
      } else {
        res.json({ message: "User registered successfully", result: dbResult });  // Send the result back as the response
      }
    });
  } else {
    res.status(400).json({ error: "Username and password are required" });
  }
});

module.exports = router;

