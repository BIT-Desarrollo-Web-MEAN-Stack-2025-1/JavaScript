const tictactoe = [
    [ 'X', '0', 'X' ],
    [ 'X', 'X', '0' ],
    [ '0', '0', 'X' ]
];

let contarEquis = 0;
let i = 0;

while( i < tictactoe.length ) {
    // console.log( tictactoe[ i ] );
    let j = 0;

    while( j < tictactoe[ i ].length ) {
        if( tictactoe[ i ][ j ] == 'X' ) {
            contarEquis++;
        }

        j++
    }

    i++;
}

console.log( 'La cantidad de Equis que hay es: ' + contarEquis );