const materiasDeJuan = [
    { nombreMateria: 'Programacion', notaFinal: 3 },
    { nombreMateria: 'Logica', notaFinal: 3.6 },
    { nombreMateria: 'Matematica', notaFinal: 4.1 },
    { nombreMateria: 'Algebra', notaFinal: 2.1 }
];

const materiasDeAna = [
    { nombreMateria: 'Ciencias', notaFinal: 1 },
    { nombreMateria: 'Logica', notaFinal: 4.3 },
    { nombreMateria: 'Sociales', notaFinal: 2.3 },
    { nombreMateria: 'Fisica', notaFinal: 4.3 }
];

function sumarNotas ( lista ) {
    let totalNotas = 0;

    for( let i = 0; i < lista.length; i++ ) {
        totalNotas = totalNotas + lista[ i ].notaFinal;
    }

    return totalNotas;
}

function promedio( total, cantNotas ) { 
    return total / cantNotas;
}

/** Implementacion */

let total = sumarNotas( materiasDeJuan );
let resultado = promedio( total, materiasDeJuan.length );

console.log( `El promedio de las notas de Juan es: ${ resultado }` );

total = sumarNotas( materiasDeAna );
resultado = promedio( total, materiasDeAna.length );

console.log( `El promedio de las notas de Ana es: ${ resultado }` );
