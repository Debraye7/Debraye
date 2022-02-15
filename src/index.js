const express = require('express');

const path = require('path');

// initializations
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configuracion
app.set('port', process.env.PORT || 3000);

// Routes
app.use(require('./routes'));
// app.use('/torneos', require('./routes/torneos'));

// Public
app.use(express.static(path.join(__dirname, 'public')));

// Servidor
app.listen(app.get('port'), ()=>{
    console.log('Servidor activo en', app.get('port'));
});