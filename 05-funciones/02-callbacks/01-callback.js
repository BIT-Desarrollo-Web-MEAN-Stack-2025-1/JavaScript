// Callback: Funcion que se le pasa como parametro a otra funcion

function saludar( nombre ) {
    console.log( 'Hola ' + nombre );
}

function despedirse( nombre ) {
    console.log( nombre + ' hasta luego, que estes bien' );
}

// callback: Es la funcion que se pasa dentro del cuerpo de otra funcion, para ser ejecutada dentro de ella
function ejecutarAccion( callback, nombre ) {
    callback( nombre );
}

ejecutarAccion( saludar, 'Juan' );
ejecutarAccion( despedirse, 'Juan' );