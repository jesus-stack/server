const mongoose = require('mongoose');
const {Schema} = mongoose;

const productmodel=new Schema({
    nombre: {type:String, required:true},
    categoria: {type:String, required:true},
    ubicacion: {type:String, required:true},
    precio: {type:Number, required:true}
});

module.exports= mongoose.model('producto',productmodel);