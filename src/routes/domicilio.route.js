const express = require('express')
const router = express.Router()
const domiciliosController = require('../controllers/domicilio.controller');

// Retrieve all usuario
router.get('/', domiciliosController.findAll);

// Create a new usuario
router.post('/', domiciliosController.create);

// Retrieve a single usuario with id
router.get('/:id', domiciliosController.findById);

// Update a usuario with id
router.put('/:id', domiciliosController.update);

// Delete a usuario with id
router.delete('/:id', domiciliosController.delete);

module.exports = router