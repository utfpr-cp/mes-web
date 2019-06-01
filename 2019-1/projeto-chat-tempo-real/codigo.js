function limpaCaixa(elementoCaixa) {
    elementoCaixa.innerHTML = '';
}

window.onload = function () {
    var inputMsg = document.getElementById('inputMsg');
    var btnEnviar = document.getElementById('btnEnviar');
    var caixaMsgs = document.getElementById('caixaMsgs');

    btnEnviar.addEventListener('click', () => {
        if (inputMsg.value == '') {
            alert('Voce deve inserir uma msg para enviar');
            return;
        }
    });

    var addMsg = function (msg) {
        var elementMsg = document.createElement('li');
        elementMsg.innerHTML = msg;
        caixaMsgs.append(elementMsg);
    }

    addMsg('Ola');
    addMsg('Oie, tudo bom?');
    addMsg('Td, e com vc?');


}