const express = require('express');
const User = require('../models/user');
const router = express.Router();

// Connexion
router.post('/login', async (req, res) => {
  const { login, password } = req.body;

  try {
    const user = await User.findOne({ login, password });
    if (!user) {
      return res.status(401).json({ message: 'Identifiants incorrects' });
    }

    req.session.user = user;
    res.json({ message: 'Connexion réussie', user });
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

// Déconnexion
router.post('/logout', (req, res) => {
  req.session.destroy();
  res.json({ message: 'Déconnexion réussie' });
});

module.exports = router;
