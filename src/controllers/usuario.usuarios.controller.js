'use strict';

//Require
const usuario_usuarios = require('../models/usuario.usuarios.model');
exports.findAll = function (req, res) {
  usuario_usuarios.findAll(function (err, usuario_usuarios) {
    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', usuario_usuarios);
    res.send(usuario_usuarios);
  });
};

//Create
exports.create = function (req, res) {
  const new_usuario_usuarios = new usuario_usuarios(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    usuario_usuarios.create(new_usuario_usuarios, function (err, usuario_usuarios) {
      if (err)
        res.send(err);
      res.json({ error: false, message: "usuario_usuarios added successfully!", data: usuario_usuarios });
    });
  }
};

//Find
exports.findById = function (req, res) {
  usuario_usuarios.findById(req.params.id, function (err, usuario_usuarios) {
    if (err)
      res.send(err);
    res.json(usuario_usuarios);
  });
};

//Update
exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    usuario_usuarios.update(req.params.id, new usuario_usuarios(req.body), function (err, usuario_usuarios) {
      if (err)
        res.send(err);
      res.json({ error: false, message: 'usuario_usuarios successfully updated' });
    });
  }
};


//Delete
exports.delete = function (req, res) {
  usuario_usuarios.delete(req.params.id, function (err, usuario_usuarios) {
    if (err)
      res.send(err);
    res.json({ error: false, message: 'usuario_usuarios successfully deleted' });
  });
};