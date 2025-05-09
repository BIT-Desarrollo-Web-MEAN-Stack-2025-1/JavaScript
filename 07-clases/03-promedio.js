class Materia {
    constructor( nombreMateria ) {
        this.nombre = nombreMateria;
        this.notas = [];
        this.totalNotas = 0;
    }

    agregarNota( nuevaNota ) {
        this.notas.push( nuevaNota );
    }

    agregarNotas( listaNotas ) {
        this.notas = [ ...this.notas, ...listaNotas ];
    }

    sumarNotas() {
        for ( const nota of this.notas ) {
            this.totalNotas = this.totalNotas + nota;
        }
    }

    promedio() {
        this.sumarNotas();
        return this.totalNotas / this.notas.length;
    }
}

// Implementacion
const mat = new Materia( 'Matematicas' );
mat.agregarNota( 4.1 );
mat.agregarNota( 3.2 );
mat.agregarNotas([ 2.3, 1.4, 3.4 ]);


const promedio = mat.promedio(); 
console.log( promedio );

console.log( mat );