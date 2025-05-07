function mostrarNumeros ( listaNumeros ) {
    // console.log( listaNumeros[ 1 ] );          // [ 4, 5, 6 ]
    // console.log( listaNumeros[ 0 ][ 0 ] );     // 1

    for( let i = 0; i < listaNumeros.length; i++ ) {
        // console.log( i, ' ---> ', listaNumeros[ i ] );
        
        for( let j = 0; j < listaNumeros[ i ].length; j++ ) {
            // console.log( listaNumeros[ j ][ i ] );    // vertical
            console.log( listaNumeros[ i ][ j ] );       // horizontal
        }
    }
}

export { mostrarNumeros };