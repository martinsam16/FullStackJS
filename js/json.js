// JSON

let curso = {
    titulo: 'Mi libro',
    autor: 'Elmo',
    bloque: ['Introduccion', 'Funciones'],
    inscribir: function(usuario){
        console.log(usuario+' Registrado');
    }
}

console.log(curso.titulo);

curso.inscribir('Martin')