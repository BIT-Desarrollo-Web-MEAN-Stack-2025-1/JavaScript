const frutas = [ 'Mango', 'Mora', 'Mandarina', 'Mangostino' ];

frutas.push( 'Manzana' );
frutas.push( 'Fresa' );

// console.log( frutas.length );

let i = frutas.length - 1;

while( i >= 0 ) {
    console.log( frutas[ i ] );

    i--;
}