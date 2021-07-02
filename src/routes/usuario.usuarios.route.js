const express = require('express')
const router = express.Router()
const usuario_usuariosController = require('../controllers/usuario.usuarios.controller');

// Retrieve all usuario
router.get('/', usuario_usuariosController.findAll);

// Create a new usuario
router.post('/', usuario_usuariosController.create);

// Retrieve a single usuario with id
router.get('/:id', usuario_usuariosController.findById);

// Update a usuario with id
router.put('/:id', usuario_usuariosController.update);

// Delete a usuario with id
router.delete('/:id', usuario_usuariosController.delete);

module.exports = router