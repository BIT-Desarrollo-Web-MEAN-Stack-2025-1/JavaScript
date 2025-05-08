const frutas = [ 'Mango', 'Mora', 'Mandarina', 'Mangostino' ];

frutas.push( 'Manzana' );
frutas.push( 'Fresa' );

for( let value in frutas ) {
    console.log( value );
}