var path = require('path');
var express = require('express');
var expressApp = express();
var http = require('http');
var fs = require('fs');
var serverHttp = http.createServer(expressApp);

var rotaApp = require('./rotaApp.js');

serverHttp.listen(8080, () => {
    console.log('Servidor HTTP rodando...');
});

expressApp.use('/app', rotaApp);

expressApp.get('/', (req, res) => {
    res.send('estamos na raiz do site');
});

