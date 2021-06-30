'use strict';

//Require
const usuarios = require('../models/usuarios.model');
exports.findAll = function (req, res) {
  usuarios.findAll(function (err, usuarios) {
    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', usuarios);
    res.send(usuarios);
  });
};

//Create
exports.create = function (req, res) {
  const new_usuarios = new usuarios(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    usuarios.create(new_usuarios, function (err, usuarios) {
      if (err)
        res.send(err);
      res.json({ error: false, message: "usuarios added successfully!", data: usuarios });
    });
  }
};

//Find
exports.findById = function (req, res) {
  usuarios.findById(req.params.id, function (err, usuarios) {
    if (err)
      res.send(err);
    res.json(usuarios);
  });
};

//Update
exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    usuarios.update(req.params.id, new usuarios(req.body), function (err, usuarios) {
      if (err)
        res.send(err);
      res.json({ error: false, message: 'usuarios successfully updated' });
    });
  }
};


//Delete
exports.delete = function (req, res) {
  usuarios.delete(req.params.id, function (err, usuarios) {
    if (err)
      res.send(err);
    res.json({ error: false, message: 'usuarios successfully deleted' });
  });
};