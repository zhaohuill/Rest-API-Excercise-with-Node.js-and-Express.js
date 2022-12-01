const express = require('express');
const morgan = require('morgan');
const app = express();

// +-SETTINGS:_
app.set('port', process.env.PORT || 3000); /**+-La Sintaxis "process.env.PORT" sirve para que de Existir un Puerto Predefinido por el Servicio de La Nube, lo use, y si no "|| 3000" que use 
    Por Defecto el Puerto 3000.*/
app.set('json spaces', 2);


// +-MIDDLEWARES:_
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})); /**+-Para poder entender Datos enviados desde un Formulario hecho con HTML, CSS y JS.*/
app.use(express.json());

// +-ROUTES:_
app.use(require('./routes/index.js'));
app.use('/api/movies', require('./routes/movies.js'));
app.use('/api/users', require('./routes/users.js'));

// +-STARTING THE SERVERS:_
app.listen(app.get('port'), () => {
    console.log(`Server on Port ${app.get('port')}.`);
});