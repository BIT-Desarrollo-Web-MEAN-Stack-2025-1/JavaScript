//SINTAXIS
const estudiantes = [ 'Karen', 'Nicolas', 'Diego' ];


// No recibe parametros
function saludar() {
    console.log( 'Hola' );
}


// Recibe un parametro
function saludaA( nombre ) {
    console.log( 'Hola ' + nombre );
}

for( let i = 0; i < estudiantes.length; i++ ) {
    saludaA( estudiantes[ i ] );
}


function sumar( num1, num2 ) {
    return num1 + num2;
}

let resultado = sumar( 3, 6 );
console.log( resultado );
resultado = sumar( 5, 98 );
console.log( resultado );


// Funcion anonima: No olvidar asignarla a una constante o variable
const despedirse = function () {
    console.log( 'Adios a todos' );
}

despedirse();




