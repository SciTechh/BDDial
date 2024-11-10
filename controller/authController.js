const express = require('express');

// Hardcoded admin credentials (for demonstration)
const adminUser = {
  username: 'Admin',
  password: '123456'
};

const login = async (req, res) => {
    const { username, password } = req.body;
    console.log("Entered Username:", username);
    console.log("Entered Password:", password);
  
    if (username === adminUser.username && password === adminUser.password) {
      res.redirect('/'); 
    } else {
      res.render('login', { message: 'Invalid username or password' });
    }
  };

module.exports = {
  login
};
