const numeros = [ 4, 3, 7, 8, 11, 9, 2 ];

// const potencias = numeros.map( ( value ) => {
//     return value * value;
// });

// console.log( potencias );

// const resultado = potencias.filter( ( value ) => {
//     return value < 50;
// })

// console.log( resultado );

const resultado = numeros.map(( value ) => {
                    return value * value;
                })
                .filter( (value) => {
                    return value < 50;
                });
console.log( resultado );