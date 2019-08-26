// Anonimas xd
function executor(funcion){
    funcion();
}

function decirHola(){
    console.log('Hola xd');
}

executor(function(){
    console.log('F');
});

// El contexto

//console.log(this);

function demo(){
    console.log(this);
}

//demo();

let objeto = {
    demo: function(){
        console.log(this);
    }
}

//objeto.demo();

//Arrow Function

let arrow = () =>{
    console.log('Hola bb');
}
//arrow();