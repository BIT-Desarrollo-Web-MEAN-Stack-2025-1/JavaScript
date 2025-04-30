let mensaje = '';

for( let i = 0; i <= 2; i++ ) {
    const color = prompt( 'Digite su color' );
    mensaje = mensaje + ' ' + color;
}

console.log( mensaje );