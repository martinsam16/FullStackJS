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
    var a = 33;
    if (true) {
        var a_1 = 44;
        console.log(a_1);
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
for (var i = 0; i < 5; i++) {
    console.log('Number ' + i);
}
var colores = [];
colores.push('rojo');
colores.push('verde');
colores.push('azul');
