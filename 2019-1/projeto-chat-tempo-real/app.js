var path = require('path');
var http = require('http');
var express = require('express');
var app = express();
var httpServer = http.createServer(app);
var socketIo = require('socket.io');
var msgs = [];
msgs.push('ola');
msgs.push('ola tudo bem');
msgs.push('boa noite');
var countConections = 0;
httpServer.listen(3000, () => {
    console.log('Servidor HTTP rodando...');
});

app.use(express.static(path.join(__dirname, 'publica')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

var serverSocketIo = socketIo.listen(httpServer);

serverSocketIo.on('connection', (socketClient) => {
    countConections++;
    console.log('Um cliente conectou');
    socketClient.emit('allMsgs', JSON.stringify(msgs));

    socketClient.on('enviaMsg', (data) => {
        console.log('Msg recebida', data);
        msgs.push(data);
        serverSocketIo.sockets.emit('novaMsg', msgs[msgs.length - 1]);
    });
});