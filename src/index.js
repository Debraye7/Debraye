const express = require('express');
const path = require('path');

// initializations
const app = express();

// Configuracion
app.set('port', process.env.PORT || 3000);

// Public
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Servidor
app.listen(app.get('port'), ()=>{
    console.log('Servidor activo en', app.get('port'));
});