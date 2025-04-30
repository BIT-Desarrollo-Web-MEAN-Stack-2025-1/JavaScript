const semestre = [
    { nombreMateria: 'Programacion', notaFinal: 3 },
    { nombreMateria: 'Logica', notaFinal: 3.6 },
    { nombreMateria: 'Matematica', notaFinal: 4.1 },
    { nombreMateria: 'Algebra', notaFinal: 2.1 }
];

let sumaNotas = 0;
let promedio = 0;
let i = 0;

do{
    sumaNotas = sumaNotas + semestre[ i ].notaFinal;

    i++;
} while( i < semestre.length ) 

promedio = sumaNotas / semestre.length;

console.log( 'El promedio de las notas es: ' + Math.ceil( promedio ) );

// Math.floor( promedio ) ======> Redondea hacia abajo
// Math.ceil( promedio )  ======> Redondea hacia arriba
// Math.round( promedio ) ======> Redondea hacia abajo si es inferior a X.5
//                        ======> Redondea hacia arriba si es superior a X.5