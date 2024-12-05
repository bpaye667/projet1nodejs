const express = require('express');
const { getUsers, createUser, updateUser, deleteUser, getProfile, updateProfile } = require('../controllers/userController');
const { isAuthenticated, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();

// Admin uniquement
router.get('/', isAuthenticated, isAdmin, getUsers);
router.post('/', isAuthenticated, isAdmin, createUser);
router.put('/:id', isAuthenticated, isAdmin, updateUser);
router.delete('/:id', isAuthenticated, isAdmin, deleteUser);

// Utilisateur simple
router.get('/profile', isAuthenticated, getProfile);
router.put('/profile', isAuthenticated, updateProfile);

module.exports = router;
