const frutas = [ 'Mango', 'Mora', 'Mandarina', 'Mangostino' ];
const buscar = 'Lima';

frutas.push( 'Manzana' );
frutas.push( 'Papa' );

// for( let i = 0; i < frutas.length; i++ ) {
//     if( frutas[ i ] == buscar ) {
//         console.log( 'Fruta encontrada: ' + frutas[ i ] );
//         break;
//     }
//     else {
//         console.log( 'Aqui no esta' );
//     }
// }

const frutaEncontrada = frutas.find( function( value ) {
    return value == buscar;
});

console.log( frutaEncontrada );
