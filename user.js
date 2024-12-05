const express = require('express');
const { getUsers, createUser, updateUser, deleteUser } = require('./usercontroller');
const router = express.Router();

router.get('/', getUsers); // Voir tous les utilisateurs
router.post('/', createUser); // Ajouter un utilisateur
router.put('/:id', updateUser); // Modifier un utilisateur
router.delete('/:id', deleteUser); // Supprimer un utilisateur

module.exports = router;
