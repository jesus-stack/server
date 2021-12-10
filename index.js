const express = require('express');
const conectDB = require('./config/db');
const DB = require('./config/db');
const cors = require('cors')

//cresr server
const app = express();

//conectar db
conectDB();
app.use(cors());
app.use(express.json())

//rutas
app.use('/productos',require('./routes/producto,routes'));

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log('servidor iniciado correctamente en puerto '+ PORT);
})