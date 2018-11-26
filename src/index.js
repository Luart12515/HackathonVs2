const EXPRESS = require('express');
const MORGAN =require('morgan');
const PATH = require('path');

const { mongoose } = require('./database');


const APP = EXPRESS();

//configuraciones
APP.set('port', process.env.PORT || 3000);

//Middlewares
APP.use(MORGAN('dev'));
APP.use(EXPRESS.json());

//Routes
APP.use('/api/users',require('./routes/users.routes'));
APP.use('/api/resume',require('./routes/resume.routes'));

//Static files
APP.use(EXPRESS.static(PATH.join(__dirname, 'public')));

//Inicio del servidor
APP.listen(APP.get('port'), () => {
    console.log(`Server on port ${APP.get('port')}`);
});