const express = require('express');
const userRoutes = require('./user');
const authRoutes = require('./authen');

const app = express();
app.use(express.json());

// Routes
app.use('/auth', authRoutes); // Authentification
app.use('/users', userRoutes); // Gestion des utilisateurs

// Démarrer le serveur
app.listen(3000, () => {
    console.log('Serveur démarré sur http://localhost:3000');
});
