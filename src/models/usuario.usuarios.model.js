'use strict';
var dbConn = require('../../config/db.config');
//usuario_usuarios object create
var UsersUsers = function (usuario_usuarios) {
  this.principal_id = usuario_usuarios.principal_id;
  this.secundario_id = usuario_usuarios.secundario_id;
  this.created_at = new Date();
  this.updated_at = new Date();
};

UsersUsers.create = function (newEmp, result) {
  dbConn.query("INSERT INTO usuario_usuarios set ?", newEmp, function (err, res) {
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

UsersUsers.findById = function (id, result) {
  dbConn.query("Select * from usuario_usuarios where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      result(null, res);
    }
  });
};
UsersUsers.findAll = function (result) {
  dbConn.query("Select * from usuario_usuarios", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      console.log('usuario_usuarioss : ', res);
      result(null, res);
    }
  });
};

UsersUsers.update = function (id, usuario_usuarios, result) {
  dbConn.query("UPDATE usuario_usuarios SET principal_id=?,secundario_id=? WHERE id = ?", [usuario_usuarios.principal_id, usuario_usuarios.secundario_id, id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

UsersUsers.delete = function (id, result) {
  dbConn.query("DELETE FROM usuario_usuarios WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      result(null, res);
    }
  });
};

module.exports = UsersUsers;