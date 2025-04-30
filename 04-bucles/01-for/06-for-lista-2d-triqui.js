const tictactoe = [
    [ 'X', '0', 'X' ],
    [ 'X', 'X', '0' ],
    [ '0', '0', 'X' ]
];

let contarEquis = 0;

for( let i = 0; i < tictactoe.length; i = i + 1 ) {
    // console.log( tictactoe[ i ] );
    for( let j = 0; j < tictactoe[ i ].length; j++ ) {
        if( tictactoe[ i ][ j ] == 'X' ) {
            contarEquis++;
        }
    }
}

console.log( 'La cantidad de Equis que hay es: ' + contarEquis );