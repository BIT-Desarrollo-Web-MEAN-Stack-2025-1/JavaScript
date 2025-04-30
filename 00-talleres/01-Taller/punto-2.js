// Crea una constante (PI) con el valor de
// 3.1416 y calcula el área de un círculo (área
// = π × radio²). Pide el radio con prompt y
// muestra el resultado con alert.

const PI = 3.1416;
const radio = prompt( 'Digita el radio del circulo' );

const area = PI * radio ** 2;
// const area = PI * radio * radio;

alert( `El area del circulo con radio ${ radio } es: ${ area }` );
