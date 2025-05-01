/** Define la funcion */
function calcularValorTotal( listaProductos ) {
    let total = 0;

    for( let i = 0; i < products.length; i++ ) {
        // console.log( products[ i ].precio );

        if( products[ i ].precio ) {
            total = total + products[ i ].precio; 
        }
    }

    return total;
}

/** Implementación */
const products = [
    { nombre: 'Mango', precio: 3 },
    { nombre: 'Mandarina', precio: 1.8 },
    { nombre: 'Mangostino', precio: 5 },
    { nombre: 'Mora' }
];

const total = calcularValorTotal( products );
console.log( `El total de la compra es: ${ total }` );