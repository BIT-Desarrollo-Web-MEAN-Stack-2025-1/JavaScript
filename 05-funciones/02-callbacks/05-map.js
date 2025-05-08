const numeros = [ 4, 3, 7, 8, 11, 9, 2 ];
// const potencias = [];

// for( let i = 0; i < numeros.length; i++ ) {
//     potencias.push( numeros[ i ] ** 2 );
// }

// console.log( potencias );

const numerosModificados = numeros.map( ( value ) => {
    return value ** 2;
});

console.log( numerosModificados );