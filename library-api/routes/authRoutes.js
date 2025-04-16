const express = require('express');
const { register, login } = require('../controllers/authcontroller');

const router = express.Router();

// Register User
router.post('/register', register);

// Login User
router.post('/login', login);

module.exports = router;
