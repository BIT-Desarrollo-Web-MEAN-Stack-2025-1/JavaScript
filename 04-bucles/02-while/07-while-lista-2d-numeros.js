const numeros = [
    [ 1, 2, 3, ],           // longitud 3 
    [ 4, 5, 6 ],            // longitud 3
    [ 7, 8, 9 ]             // longitud 3
];

// console.log( numeros[ 1 ] );          // [ 4, 5, 6 ]
// console.log( numeros[ 0 ][ 0 ] );     // 1
let i = 0;

while( i < numeros.length ) {
    // console.log( i, ' ---> ', numeros[ i ] );
    let j = 0;

    while( j < numeros[ i ].length ) {
        // console.log( numeros[ j ][ i ] );    // vertical
        console.log( numeros[ i ][ j ] );       // horizontal

        j++;
    }

    i++;
}