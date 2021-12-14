const mongoose = require('mongoose');
const {Schema} = mongoose;

const productmodel=new Schema({
    nombre: {type:String, required:true},
    descripcion: {type:String, required:true},
    estado: {type:Boolean, required:true,default: false},
   
});

module.exports= mongoose.model('producto',productmodel);