import { calcularTotal } from './funciones.js';

const products = [
    { nombre: 'Mango', precio: 3 },
    { nombre: 'Mandarina', precio: 1.8 },
    { nombre: 'Mangostino', precio: 5 }
];


console.log( `El total de la compra es: ${ calcularTotal( products ) }` );

