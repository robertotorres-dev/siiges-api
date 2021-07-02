'use strict';
var dbConn = require('../../config/db.config');
//Usuarios object create
var Users = function (usuarios) {
  this.usuario = usuarios.usuario;
  this.contrasena = usuarios.contrasena;
  this.estatus = usuarios.estatus ? usuarios.estatus : 1;
  this.token_notificaciones = usuarios.token_notificaciones;
  this.created_at = new Date();
  this.updated_at = new Date();
};

Users.create = function (newEmp, result) {
  dbConn.query("INSERT INTO usuarios set ?", newEmp, function (err, res) {
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

Users.findById = function (id, result) {
  dbConn.query("Select * from usuarios where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      result(null, res);
    }
  });
};
Users.findAll = function (result) {
  dbConn.query("Select * from usuarios", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      console.log('usuarioss : ', res);
      result(null, res);
    }
  });
};

Users.update = function (id, usuarios, result) {
  dbConn.query("UPDATE usuarios SET usuario=?,contrasena=?,token_notificaciones=? WHERE id = ?", [usuarios.usuario, usuarios.contrasena, usuarios.token_notificaciones, id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Users.delete = function (id, result) {
  dbConn.query("DELETE FROM usuarios WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      result(null, res);
    }
  });
};

module.exports = Users;