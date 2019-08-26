function showVar() {
    var a = 33;
    if (true) {
        var a = 44;
        console.log(a);
    }
    console.log(a);
}

//showVar();

function showLet() {
    let a = 33;
    if (true) {
        let a = 44;
        console.log(a);
    }
    console.log(a);
}

//showLet();

/*
// Se guarda en memoria xd
for (var i = 0; i < 5; i++) {
    console.log('Number ' + i);
}

console.log(i);
*/
// Mejor
for (let i = 0; i < 5; i++) {
    console.log('Number ' + i);
}

const colores = [];
colores.push('rojo');
colores.push('verde');
colores.push('azul');
