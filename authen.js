const express = require('express');
const db = require('./dbb');

const router = express.Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const [users] = await db.execute('SELECT id, username, email, role, password FROM users WHERE email = ?', [email]);

        if (users.length === 0 || users[0].password !== password) {
            return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
        }

        res.json({ message: 'Connexion réussie', user: users[0] });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

