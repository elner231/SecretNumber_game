
let numeroSecreto = 0;
console.log(numeroSecreto);
let intentos = 0;
let listaNumerosSorteados=[];
 // genera el numero secreto del juego y lo retorna 
 let numeroMaximo=10;
function generadorNumeroSecreto() {
    
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo )+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    /* Si el numero generado esta en la lista de numeros , hay generar otro */
    //si ya sorteamos todos los numeros 
    if (listaNumerosSorteados.length== numeroMaximo)
    {
        asignarTextoElemento('p',' Todos los numeros han sido jugados');

    }
     else{
        if (listaNumerosSorteados.includes(numeroGenerado))
    {
        return numeroGenerado();
    }
        else {
        listaNumerosSorteados.push(numeroGenerado);
       
        return numeroGenerado;
    }}
}


function asignarTextoElemento(elemento,texto) //  se encarga de generar textos en la pantalla
{
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    
    return;

}

function limpiarCaja() /*esta funcion se encarga de limpiar el imnput cuando user que no acierta */
{
    document.querySelector('#valorUsuario').value=' ';
    
    return;
}
function verificarIntento() // aca evaluamos el numero secreto con lo que el usuario coloca
{
    
    numeroDeUsuario= parseInt(document.getElementById('valorUsuario').value);
    //console.log(numeroDeUsuario===numeroSecreto);
    if (numeroDeUsuario===numeroSecreto) //evalua el intento realizado por el usuario
    {
        //acerto
        asignarTextoElemento( 'p', `En hora buena !! Acertaste el numero en tu intento # ${intentos}`);  
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else  // no acerto
    {   
         if(numeroDeUsuario>numeroSecreto)
        {
            asignarTextoElemento('p','El numero es menor que '+ numeroDeUsuario); // le da primer pista
            
        }
        else{
            asignarTextoElemento('P','El numero es mayor que '+ numeroDeUsuario); //le da segunda pista
        
    }
    limpiarCaja();
    intentos++;
    
    }
    
    return;
}

function nuevoJuego()
{
    // esta funcion va limpiar la caja'
    limpiarCaja();
    // indicar mensaje de inicio
    //generar el numero aleatorio
    // iniciar el numero de intentos
   condicionesIniciales();
    // deshabilitar el boton de nuevoJuego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    

    return;
}

function condicionesIniciales() // permite tener la pagina con los mensajes iniciales del juego
{
    asignarTextoElemento('h1','Bievenido al juego del Numero secreto');
    asignarTextoElemento('P', `Escoge un numero del 1 al ${numeroMaximo} !`);
    numeroSecreto=generadorNumeroSecreto();
    intentos=1;
}

condicionesIniciales();








 



