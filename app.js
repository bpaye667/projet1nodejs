const express = require('express');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');

const app = express();
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/users', userRoutes);

app.listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
});
