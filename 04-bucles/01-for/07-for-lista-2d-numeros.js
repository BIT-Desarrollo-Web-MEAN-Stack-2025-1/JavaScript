const numeros = [
    [ 1, 2, 3, ],           // longitud 3 
    [ 4, 5, 6 ],            // longitud 3
    [ 7, 8, 9 ]             // longitud 3
];

// console.log( numeros[ 1 ] );          // [ 4, 5, 6 ]
// console.log( numeros[ 0 ][ 0 ] );     // 1

for( let i = 0; i < numeros.length; i++ ) {
    // console.log( i, ' ---> ', numeros[ i ] );
    
    for( let j = 0; j < numeros[ i ].length; j++ ) {
        // console.log( numeros[ j ][ i ] );    // vertical
        console.log( numeros[ i ][ j ] );       // horizontal
    }
}