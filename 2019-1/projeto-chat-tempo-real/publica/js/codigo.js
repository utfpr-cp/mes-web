function limpaCaixa(elementoCaixa) {
    elementoCaixa.innerHTML = '';
}

window.onload = function () {
    var inputMsg = document.getElementById('inputMsg');
    var btnEnviar = document.getElementById('btnEnviar');
    var caixaMsgs = document.getElementById('caixaMsgs');

    var socket = io.connect();
    var msgs;

    socket.on('allMsgs', (data) => {
        console.log(data);
        msgs = JSON.parse(data);
        console.log(msgs);
        msgs.forEach((msg) => {
            addMsg(msg);
        });
    });

    socket.on('novaMsg', data => {
        addMsg(data);
    });

    btnEnviar.addEventListener('click', () => {
        if (inputMsg.value == '') {
            alert('Voce deve inserir uma msg para enviar');
            return;
        }

        if (socket) {
            socket.emit('enviaMsg', inputMsg.value);
            alert('Msg enviada!');
        }
    });

    var addMsg = function (msg) {
        var elementMsg = document.createElement('li');
        elementMsg.innerHTML = msg;
        caixaMsgs.append(elementMsg);
    }
}