const model = require('../models/producto')
const productoController = {};

productoController.crearproducto= async (req, res,next)=>{
    const producto = new model(req.body);
   await producto.save();
   res.json('guardado exitosamente');
};
productoController.getproducto= async (req, res,next)=>{
    const productos = await model.find();
    res.json(productos);
};
productoController.eliminarproducto= async (req, res,next)=>{
     await model.findByIdAndRemove(req.params.id);
    res.json('eliminado exitosamente');
};
productoController.obtenerproducto= async (req, res,next)=>{
   const producto = await model.findById(req.params.id);
   res.json(producto);
};
productoController.editarproducto= async (req, res,next)=>{
    await model.findByIdAndUpdate(req.params.id,req.body);
   res.json('editado exitosamente');
};

module.exports = productoController;