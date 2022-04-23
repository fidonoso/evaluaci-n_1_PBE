// const utils = require('./resources/utils');
const express = require('express') //npm i express
const app = express()
const es6Renderer = require('express-es6-template-engine') //npm i express-es6-template-engine
const router = require('./routes/index.routes');
const bodyParser = require('body-parser'); //npm install body-parser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', router);
app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');
app.use(express.json());
app.use(express.static(__dirname + '/public'))
//server listen
app.listen(3000,() =>{
    console.log('Escuchando en el puerto 3000')
})