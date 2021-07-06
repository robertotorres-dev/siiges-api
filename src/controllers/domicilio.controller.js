'use strict';

//Require
const domicilio = require('../models/domicilio.model');
exports.findAll = function (req, res) {
  domicilio.findAll(function (err, domicilio) {
    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', domicilio);
    res.send(domicilio);
  });
};

//Create
exports.create = function (req, res) {
  const new_domicilio = new domicilio(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    domicilio.create(new_domicilio, function (err, domicilio) {
      if (err)
        res.send(err);
      res.json({ error: false, message: "domicilios added successfully!", data: domicilio });
    });
  }
};

//Find
exports.findById = function (req, res) {
  domicilio.findById(req.params.id, function (err, domicilio) {
    if (err)
      res.send(err);
    res.json(domicilio);
  });
};

//Update
exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    domicilio.update(req.params.id, new domicilio(req.body), function (err, domicilio) {
      if (err)
        res.send(err);
      res.json({ error: false, message: 'domicilios successfully updated' });
    });
  }
};


//Delete
exports.delete = function (req, res) {
  domicilio.delete(req.params.id, function (err, domicilio) {
    if (err)
      res.send(err);
    res.json({ error: false, message: 'domicilios successfully deleted' });
  });
};