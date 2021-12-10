//rutas
const express = require('express');
const productoController = require('../constrollers/producto.controller');
const Router =express.Router();

//obtener
Router.get('/',productoController.getproducto)

//crear
Router.post('/',productoController.crearproducto)

//eliminar
Router.delete('/:id',productoController.eliminarproducto)

//obtenerbyid
Router.get('/:id',productoController.obtenerproducto)

//obtenerbyid
Router.put('/:id',productoController.editarproducto)



module.exports = Router;