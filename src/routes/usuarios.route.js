const express = require('express')
const router = express.Router()
const usuariosController = require('../controllers/usuarios.controller');

// Retrieve all usuarios
router.get('/', usuariosController.findAll);

// Create a new usuarios
router.post('/', usuariosController.create);

// Retrieve a single usuarios with id
router.get('/:id', usuariosController.findById);

// Update a usuarios with id
router.put('/:id', usuariosController.update);

// Delete a usuarios with id
router.delete('/:id', usuariosController.delete);

module.exports = router