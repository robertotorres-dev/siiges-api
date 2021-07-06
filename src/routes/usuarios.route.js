const express = require('express')
const router = express.Router()
const usuariosController = require('../controllers/usuarios.controller');

// Retrieve all usuario
router.get('/', usuariosController.findAll);

// Create a new usuario
router.post('/', usuariosController.create);

// Retrieve a single usuario with id
router.get('/:id', usuariosController.repr);

// Update a usuario with id
router.put('/:id', usuariosController.update);

// Delete a usuario with id
router.delete('/:id', usuariosController.delete);

module.exports = router