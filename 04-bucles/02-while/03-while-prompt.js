let mensaje = '';

let i = 0;

while( i <= 2 ) {
    const color = prompt( 'Digite su color' );
    mensaje = mensaje + ' ' + color;

    i++;
}

console.log( mensaje );