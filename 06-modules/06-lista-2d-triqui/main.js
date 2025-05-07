import { contarEquis } from "./funciones.js";

const tictactoe = [
    [ 'X', '0', 'X' ],
    [ 'X', 'X', '0' ],
    [ '0', '0', 'X' ]
];

console.log( 'La cantidad de Equis que hay es: ' + contarEquis( tictactoe ) );