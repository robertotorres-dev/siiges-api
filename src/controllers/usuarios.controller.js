'use strict';

//Require
const usuarios = require('../models/usuarios.model');
const personas = require('../models/persona.model');
const domicilios = require('../models/domicilio.model');


//Datos Representante
exports.datosRepresentante = function (req, res) {
  function representante() {
    this.usuario = usuarios;
    this.persona = personas;
    this.domicilio = domicilios;
  }
  //Datos del usuario por id
  usuarios.findById(req.params.id, function (err, usuario) {
    if (err)
      res.send(err);
    const usuario_representante = usuario[0];

    //Datos de persona con parametro de usuarios
    personas.findById(usuario_representante.persona_id, function (err, persona) {
      if (err)
        res.send(err);
      const persona_representante = persona[0];

      //Datos de domicilio con parametro de persona    
      domicilios.findById(persona_representante.domicilio_id, function (err, domicilio) {
        if (err)
          res.send(err);
        const domicilio_representante = domicilio[0];

        //Objeto a retornar
        const representante = {
          usuario: usuario_representante,
          persona: persona_representante,
          domicilio: domicilio_representante,
        };

        //Envio de respuesta
        res.json(representante);
      });
    });
  });
};


//FindAll
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
