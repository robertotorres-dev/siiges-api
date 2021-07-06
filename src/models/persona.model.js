'use strict';
var dbConn = require('../../config/db.config');
//personas object create
var People = function (personas) {
  this.domicilio_id = personas.domicilio_id;
  this.nombre = personas.nombre;
  this.contrasena = personas.contrasena;
  this.apellido_paterno = personas.apellido_paterno;
  this.apellido_materno = personas.apellido_materno;
  this.fecha_nacimiento = personas.fecha_nacimiento;
  this.sexo = personas.sexo;
  this.nacionalidad = personas.nacionalidad;
  this.correo = personas.correo;
  this.telefono = personas.telefono;
  this.celular = personas.celular;
  this.curp = personas.curp;
  this.rfc = personas.rfc;
  this.ine = personas.ine;
  this.titulo_cargo = personas.titulo_cargo;
  this.fotografia = personas.fotografia;
  this.created_at = new Date();
  this.updated_at = new Date();
};

People.create = function (newEmp, result) {
  dbConn.query("INSERT INTO personas set ?", newEmp, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

People.findById = function (id, result) {
  dbConn.query("Select * from personas where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      result(null, res);
    }
  });
};
People.findAll = function (result) {
  dbConn.query("Select * from personas", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      console.log('personass : ', res);
      result(null, res);
    }
  });
};

People.update = function (id, personas, result) {
  dbConn.query("UPDATE personas SET domicilio_id=?,nombre=?,contrasena=?,apellido_paterno=?,apellido_materno=?,fecha_nacimiento=?,sexo=?,nacionalidad=?,correo=?,telefono=?,celular=?,curp=?,rfc=?,ine=?,titulo_cargo=?,fotografia=? WHERE id = ?", [personas.domicilio_id, personas.nombre, personas.contrasena, personas.apellido_paterno, personas.apellido_materno, personas.fecha_nacimiento, personas.sexo, personas.nacionalidad, personas.correo, personas.telefono, personas.celular, peronas.curp, personas.rfc, personas.ine, personas.titulo_cargo, personas.fotografia, id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

People.delete = function (id, result) {
  dbConn.query("DELETE FROM personas WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      result(null, res);
    }
  });
};

module.exports = People;