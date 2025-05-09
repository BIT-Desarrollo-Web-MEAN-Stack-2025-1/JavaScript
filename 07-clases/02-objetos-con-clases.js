const felipe = {};

class Persona {
    constructor( name = 'Fulanito', age = 0 ) {
        // console.log( 'Soy la clase Persona' );
        this.name = name;
        this.age = age;
    }

    presentarse () {
        console.log( `Hola soy ${ this.name } mucho gusto` )
    }
    
    responderSaludo () {
        console.log( `El gusto es mio` );
    }
}

const marco = new Persona( 'Marco Antonio', 33 );
const karen = new Persona( 'Karen Dayanna', 23 );
const juan = new Persona();

marco.presentarse();
// marco.age = 30; 

console.log( marco );