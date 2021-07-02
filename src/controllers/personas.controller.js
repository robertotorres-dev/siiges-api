'use strict';

//Require
const personas = require('../models/persona.model');
exports.findAll = function (req, res) {
  personas.findAll(function (err, personas) {
    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', personas);
    res.send(personas);
  });
};

//Create
exports.create = function (req, res) {
  const new_personas = new personas(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    personas.create(new_personas, function (err, personas) {
      if (err)
        res.send(err);
      res.json({ error: false, message: "personas added successfully!", data: personas });
    });
  }
};

//Find
exports.findById = function (req, res) {
  personas.findById(req.params.id, function (err, personas) {
    if (err)
      res.send(err);
    res.json(personas);
  });
};

//Update
exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    personas.update(req.params.id, new personas(req.body), function (err, personas) {
      if (err)
        res.send(err);
      res.json({ error: false, message: 'personas successfully updated' });
    });
  }
};


//Delete
exports.delete = function (req, res) {
  personas.delete(req.params.id, function (err, personas) {
    if (err)
      res.send(err);
    res.json({ error: false, message: 'personas successfully deleted' });
  });
};