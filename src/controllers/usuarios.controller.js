'use strict';

//Require
const usuarios = require('../models/usuarios.model');
const persona = require('../models/persona.model');
const domicilio = require('../models/domicilio.model');


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



//Datos Representante
exports.repr = function (req, res) {
  function representante(){
  this.usuarios = usuarios;
  this.persona = persona;
  this.domicilio = domicilio;
}
  var representante = new representante();
  usuarios.findById(req.params.id, function (err, usuarios) {
    if (err)
      res.send(err);
    representante = {
      usuarios: usuarios[0], 
    };
  });
  persona.findById(req.params.id, function (err, persona) {
    if (err)
      res.send(err);
    representante.Object.assign = {
      persona: persona[0], 
    };
  });
  domicilio.findById(req.params.id, function (err, domicilio) {
    if (err)
      res.send(err);
    representante.Object.assign = {
      domicilio: domicilio[0], 
    };
    console.log(representante);
    res.json(representante);
  });
};

//Delete
exports.delete = function (req, res) {
  usuarios.delete(req.params.id, function (err, usuarios) {
    if (err)
      res.send(err);
    res.json({ error: false, message: 'usuarios successfully deleted' });
  });
};

//Dato representante
exports.delete = function (req, res) {
  usuarios.delete(req.params.id, function (err, usuarios) {
    if (err)
      res.send(err);
    res.json({ error: false, message: 'usuarios successfully deleted' });
  });
};