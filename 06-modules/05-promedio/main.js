// CommonJS (Viejita)
// const { sumarNotas } = require( './funciones.js' ); 

// ESModule (Moderna)
import { sumarNotas, promedio } from './funciones.js';
import { materiasDeJuan, materiasDeAna } from './materias.js';


let total = sumarNotas( materiasDeJuan );
let resultado = promedio( total, materiasDeJuan.length );

console.log( `El promedio de las notas de Juan es: ${ resultado }` );

total = sumarNotas( materiasDeAna );
resultado = promedio( total, materiasDeAna.length );

console.log( `El promedio de las notas de Ana es: ${ resultado }` );