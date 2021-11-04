const display = document.getElementById("display");
console.log(display)
var numeroNovo = true;
var operador;
var numeroAnterior;

function inserirNumero(numero) {    
    atualizarDisplay(numero);
}

function atualizarDisplay(numero){
    if(numeroNovo){
        display.value = numero;
        numeroNovo = false;
    }else {
        display.value += numero;
    }
}

function selecionarOperador(operadorClicado){
    if(!numeroNovo){
        calcular();
        numeroNovo = true;
        operador = operadorClicado;
        numeroAnterior = Number(display.value);
    }
}

function operacaoPendente () {
    return operador !== undefined;
}

function calcular(){
    if(operacaoPendente()){
        const numeroAtual = Number(display.value);
        numeroNovo = true;
        if(operador === "+"){
            atualizarDisplay(numeroAnterior + numeroAtual)
        }else if(operador === "-"){
            atualizarDisplay(numeroAnterior - numeroAtual)
        }else if(operador === "/"){
            atualizarDisplay(numeroAnterior / numeroAtual)
        }else if(operador === "*"){
            atualizarDisplay(numeroAnterior * numeroAtual)
        }
    }
}

function chamarIgual(){
    calcular();
    operador = undefined;
}

function limparDisplay(){
    display.value = "0";
    numeroNovo = true;
    numeroAnterior = undefined;
    operador = undefined;   
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function inserirDecimal(){
    if(display.value.indexOf(',') === -1){
        atualizarDisplay("0,")
    }
}


function clicou(event){
    console.log("Entrouu")
    if(event.key = "7"){
        console.log("Número 7")
    }
}