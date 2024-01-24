/*let parrafo = document.querySelector("p");
parrafo.innerHTML ="dime un numero del 1 a 15";
*/
let numeroSecreto = 0;
let intentos = 0;
let listaNumeros =[];
let numeroMaximo = 15;
// lista de numeros secretos



function asignarTextoElemento(elemento, texto) {
    let elmentoHTML = document.querySelector(elemento);
    elmentoHTML.innerHTML =texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value); 
     if (numeroSecreto===numeroUsuario) {
     asignarTextoElemento("p",`acertastes el numero en ${intentos} ${(intentos===1) ? "intento" : "intentos"}`);
     document.getElementById('reiniciar').removeAttribute('disabled');
     }else {
        //el usuario no acerto
        if (numeroUsuario>numeroSecreto){
        asignarTextoElemento("p","el numero es menor");
        }else {
            asignarTextoElemento("p","el numero es mayor");
        }
        intentos++;
        limpiarcaja();
     }
    return;
}

function limpiarcaja() {
  valorCaja = document.querySelector("#valorUsuario").value = "";
    //valorCaja.value = "";

}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log (numeroGenerado);
    console.log(listaNumeros);
    // si ya generamos los numeros sorteados
    if (listaNumeros.length == numeroMaximo) {
asignarTextoElemento ("p","ya se sortearon todos los numeros posibles.");
    }else {
    //si el numero generado esta incluido en la lista 
    if (listaNumeros.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else {
        listaNumeros.push(numeroGenerado);
        return numeroGenerado;
    }
}
}
function condicionesInciales() {
    asignarTextoElemento("h1", "juego del numero secreto");
    asignarTextoElemento("p", `dime un numero del 1 a ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
     intentos = 1;

}
 function juegoNuevo() {
//limpiar codigo
limpiarcaja();
//indicar mensaje de intervalo de numeros
//iniciar el numero aleatorio
//inicializar el numero de intentos
condicionesInciales();
//desabilitar el boton de nuevo juego
document.querySelector ("#reiniciar").setAttribute("disabled", "true");

    
 }

condicionesInciales();