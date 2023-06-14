var lamp = window.document.getElementById('lampada')

function estaQuebrada(){
    return lamp.src.indexOf('lampada-quebrada') > -1
}

function Ligar(){
    if(!estaQuebrada()){
        lamp.src = './lampadas/lampada-ligada.svg'
    }
}

function Desligar(){
    if(!estaQuebrada()){
        lamp.src = './lampadas/lampada-desligada.svg'
    }
}

lamp.addEventListener('click', Quebrar)
function Quebrar(){
    lamp.src = './lampadas/lampada-quebrada.svg'
}

