const db = require('./dbb');


exports.getUsers = async (req, res) => {
    try {
        const [users] = await db.execute('SELECT id, username, email, role FROM users');
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createUser = async (req, res) => {
    const { username, email, password, role } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await db.execute('INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)', [username, email, hashedPassword, role]);
        res.status(201).json({ message: 'Utilisateur créé avec succès !' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { username, email, role } = req.body;
    try {
        await db.execute('UPDATE users SET username = ?, email = ?, role = ? WHERE id = ?', [username, email, role, id]);
        res.json({ message: 'Utilisateur mis à jour avec succès !' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await db.execute('DELETE FROM users WHERE id = ?', [id]);
        res.json({ message: 'Utilisateur supprimé avec succès !' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
