const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Obtenir tous les utilisateurs
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Ajouter un nouvel utilisateur
router.post('/', async (req, res) => {
  const { firstname, lastname, login, password, role } = req.body;
  try {
    const newUser = new User({ firstname, lastname, login, password, role });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: 'Erreur lors de l\'ajout' });
  }
});

module.exports = router;
