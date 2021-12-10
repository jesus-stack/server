const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'})

const conectDB = async () =>{

    try{
        await mongoose.connect('DB_MONGO = mongodb+srv://jisus:123@cluster0.c0xwy.mongodb.net/meanproductos',{
            useNewUrlParser:true,
            useUnifiedTopology: true,
            
    
        })
        console.log('base de datos conectada');
    }
    catch(error){
        console.log(error);
        process.exit(1);// detemos la app
    }

};

module.exports = conectDB;