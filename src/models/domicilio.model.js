'use strict';
var dbConn = require('../../config/db.config');
//domicilios object create
var Address = function (domicilios) {
  this.calle = domicilios.calle;
  this.numero_exterior = domicilios.numero_exterior;
  this.numero_interior = domicilios.numero_interior;
  this.colonia = domicilios.colonia;
  this.municipio = domicilios.municipio;
  this.estado = domicilios.estado;
  this.codigo_postal = domicilioss.codigo_postal;
  this.pais = domicilios.pais;
  this.latitud = domicilios.latitud;
  this.longitud = domicilios.longitud;
  this.created_at = new Date();
  this.updated_at = new Date();
};

Address.create = function (newEmp, result) {
  dbConn.query("INSERT INTO domicilios set ?", newEmp, function (err, res) {
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

Address.findById = function (id, result) {
  dbConn.query("Select * from domicilios where id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      result(null, res);
    }
  });
};
Address.findAll = function (result) {
  dbConn.query("Select * from domicilios", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      console.log('domicilios : ', res);
      result(null, res);
    }
  });
};

Address.update = function (id, domicilios, result) {
  dbConn.query("UPDATE domicilios SET calle=?,numero_exterior=?,numero_interior=?,colonia=?,municipio=?,estado=?,codigo_postal,pais=?,latitud=?,longitud=? WHERE id = ?", [domicilios.calle, domicilios.numero_exterior, domicilios.numero_interior, domicilios.colonia, domicilios.municipio, domicilios.estado, domicilios.codigo_postal, domicilios.pais, domicilios.latitud, domicilios.longitud, id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Address.delete = function (id, result) {
  dbConn.query("DELETE FROM domicilios WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      result(null, res);
    }
  });
};

module.exports = Address;