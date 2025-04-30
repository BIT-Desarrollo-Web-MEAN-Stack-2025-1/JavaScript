// Declara dos variables (nombre y edad)
// usando let y asígnales tu nombre y edad.
// Luego, muestra un mensaje concatenado
// con console.log: "Hola, mi nombre es
// [nombre] y tengo [edad] años".

let nombre = 'Juan';
let edad = 47;

// Template String
console.log( `Hola, mi nombre es ${ nombre } y tengo ${ edad } años` );  

// Usando el operador + 
console.log( 'Hola, mi nombre es ' + nombre + ' y tengo ' + edad + ' años' );

// Usando el metodo concat()
console.log( 'Hola, mi nombre es '.concat( nombre ).concat( ' y tengo ' ).concat( edad, ' años' ) );

