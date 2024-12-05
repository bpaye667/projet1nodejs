const express = require('express');
const { login, register } = require('../controllers/authController');
const router = express.Router();

// Inscription d'un utilisateur
router.post('/register', register);

// Connexion
router.post('/login', login);

module.exports = router;
