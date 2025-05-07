function capturarColor( cantidad ) {
    let mensaje = '';

    for( let i = 1; i <= cantidad; i++ ) {
        const color = prompt( 'Digite su color' );
        mensaje = mensaje + ' ' + color;
    }

    return mensaje;     // 'red blue yellow'
}

const colores = capturarColor( 2 );        // 'red blue yellow'
console.log( colores );