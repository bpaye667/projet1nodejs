function authMiddleware(req, res, next) {
    if (req.session && req.session.user) {
      next();
    } else {
      res.status(401).json({ message: 'Accès refusé. Veuillez vous connecter.' });
    }
  }
  
  module.exports = authMiddleware;
  