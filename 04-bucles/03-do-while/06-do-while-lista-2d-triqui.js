const tictactoe = [
    [ 'X', '0', 'X' ],
    [ 'X', 'X', '0' ],
    [ '0', '0', 'X' ]
];

let contarEquis = 0;
let i = 0;

do {
    // console.log( tictactoe[ i ] );
    let j = 0;

    do {
        if( tictactoe[ i ][ j ] == 'X' ) {
            contarEquis++;
        }

        j++;
    } while( j < tictactoe[ i ].length );

    i++;
} while( i < tictactoe.length );

console.log( 'La cantidad de Equis que hay es: ' + contarEquis );