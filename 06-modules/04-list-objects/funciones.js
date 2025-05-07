function calcularTotal ( listaProductos ) {
    let total = 0;

    for( let i = 0; i < listaProductos.length; i++ ) {
        if( listaProductos[i].precio ) {
            // console.log( listaProductos[ i ].precio );
            total = total + listaProductos[ i ].precio;
        } 
    }

    return total;
}

export { calcularTotal };