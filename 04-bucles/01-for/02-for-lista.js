const frutas = [ 'Mango', 'Mora', 'Mandarina', 'Mangostino' ];

frutas.push( 'Manzana' );
frutas.push( 'Fresa' );

// console.log( frutas.length );

for( let i = frutas.length - 1; i >= 0; i-- ) {
    console.log( frutas[ i ] );
}