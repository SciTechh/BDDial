const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');

// Render login page
router.get('/login', (req, res) => {
  res.render('login', { message: null });
});

// Handle login form submission
router.post('/login', authController.login);

// Render sign-up page
router.get('/signup', (req, res) => {
  res.render('signup');
});

module.exports = router;
