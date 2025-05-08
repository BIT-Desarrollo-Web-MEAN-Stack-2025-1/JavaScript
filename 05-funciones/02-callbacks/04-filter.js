const numeros = [ 4, 3, 7, 8, 11, 9, 2 ];
// const numerosPares = [];

// for( let i = 0; i < numeros.length; i++ ) {
//     if( numeros[ i ] % 2 == 0 ) {
//         // console.log( numeros[ i ] );
//         numerosPares.push( numeros[ i ] );
//     }
// }

// console.log( numerosPares );

const pares = numeros.filter( ( value ) => {
    return value % 2 == 0;
} );

console.log( pares );