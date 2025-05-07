function contarEquis( lista ) {
    let contarEquis = 0;

    for( let i = 0; i < lista.length; i = i + 1 ) {
        // console.log( lista[ i ] );
        for( let j = 0; j < lista[ i ].length; j++ ) {
            if( lista[ i ][ j ] == 'X' ) {
                contarEquis++;
            }
        }
    }

    return contarEquis;
}

export { contarEquis };