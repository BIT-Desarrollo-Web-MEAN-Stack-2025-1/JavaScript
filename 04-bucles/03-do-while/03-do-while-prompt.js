let mensaje = '';
let i = 0;

do {
    const color = prompt( 'Digite su color' );
    mensaje = mensaje + ' ' + color;

    i++;
} while ( i <= 2 );

console.log( mensaje );