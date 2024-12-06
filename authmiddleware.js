

exports.verifyAdmin = (req, res, next) => {
    const user = req.user; // Simuler un utilisateur extrait d'une authentification
    if (user.role !== 'admin') {
        return res.status(403).json({ message: 'Accès refusé : Administrateurs uniquement' });
    }
    next();
};

exports.verifyUser = (req, res, next) => {
    // Supposons que l'utilisateur soit extrait d'un middleware précédent
    if (!req.user) {
        return res.status(401).json({ message: 'Utilisateur non authentifié' });
    }
    next();
};
