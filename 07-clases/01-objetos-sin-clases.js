// Objeto Explicito
const manuela = {
    firstName: 'Manuela',
    lastName: 'Gomez',
    profession: 'Diseniadora',
    age: 31,
    presentarse: function( ) {
        console.log( `Hola soy ${ this.firstName } mucho gusto` )
    },
    responderSaludo: function() {
        console.log( `El gusto es mio` );
    }
};

const maicol = {
    firstName: 'Maicol',
    lastName: 'Gomez',
    profession: 'Desarrollador FullStack JavaScript',
    age: 31,
    presentarse: function( ) {
        console.log( `Hola soy ${ this.firstName } mucho gusto` )
    },
    responderSaludo: function() {
        console.log( `El gusto es mio` );
    }
};

manuela.presentarse();
maicol.responderSaludo();
maicol.presentarse();