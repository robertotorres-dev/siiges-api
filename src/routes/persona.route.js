const express = require('express')
const router = express.Router()
const personasController = require('../controllers/personas.controller');

// Retrieve all usuario
router.get('/', personasController.findAll);

// Create a new usuario
router.post('/', personasController.create);

// Retrieve a single usuario with id
router.get('/:id', personasController.findById);

// Update a usuario with id
router.put('/:id', personasController.update);

// Delete a usuario with id
router.delete('/:id', personasController.delete);

module.exports = router