const products = [
    { nombre: 'Mango', precio: 3 },
    { nombre: 'Mandarina', precio: 1.8 },
    { nombre: 'Mangostino', precio: 5 }
];

let total = 0;
let i = 0;

while( i < products.length ) {
    // console.log( products[ i ].precio );
    total = total + products[ i ].precio; 

    i++;
}

console.log( `El total de la compra es: ${ total }` );