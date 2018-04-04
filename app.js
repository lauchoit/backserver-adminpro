// Requires

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')

// Conexion a la base de datos

mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', ( error, response ) => {
	if( error ) throw error;

	console.log('Base de datos en el puerto 27017: \x1b[32m%s\x1b[0m' ,'online'); 
});
// Inicializar variables
var app = express();

// Body parse
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Importacion de rutas
var appRoutes = require('./routes/app');
var usuarioRoutes = require('./routes/usuario');
var loginRoutes = require('./routes/login');
var hospitalRoutes =  require('./routes/hospital');
var medicoRouters = require('./routes/medico');

// Definicion de rutas
app.use('/usuarios', usuarioRoutes );
app.use('/hospital', hospitalRoutes);
app.use('/medico', medicoRouters);
app.use('/login', loginRoutes);
app.use( '/', appRoutes );

// Escuchar peticiones
app.listen( 3000, () => {
	console.log('Express server corriendo en el puerto 3000: \x1b[32m%s\x1b[0m' ,'online'); 
});