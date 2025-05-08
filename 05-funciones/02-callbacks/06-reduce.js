const numeros = [ 4, 3, 7, 8, 11, 9, 2 ];
// let suma = 0;

// for( let i = 0; i < numeros.length; i++ ) {
//     suma = suma + numeros[ i ];
// }

// console.log( suma );


let value = numeros.reduce( ( prev, current ) => {
    return prev + current;
} );  // Inicializa en CERO
console.log( value );

value = numeros.reduce( ( prev, current ) => {
    return prev + current;
}, 1 ); // Inicializa en UNO

console.log( value );