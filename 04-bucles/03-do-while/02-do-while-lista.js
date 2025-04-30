const frutas = [ 'Mango', 'Mora', 'Mandarina', 'Mangostino' ];

frutas.push( 'Manzana' );
frutas.push( 'Fresa' );

// console.log( frutas.length );

let i = frutas.length - 1;

do {
    console.log( frutas[ i ] );

    i--;
} while( i >= 0 );