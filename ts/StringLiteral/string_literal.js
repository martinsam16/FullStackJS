var x;
x = 'Hello';
x = undefined;
x = null;
//console.log(x);
var y; // Restricciones
y = 'Hola';
//console.log(y);
var myAdd = function (x, y) {
    if (typeof x == 'string') {
        x = parseInt(x);
    }
    return x + y;
};
function mover(distancia, direcion) {
    console.log('Moviendo ' + distancia + ' al ' + direcion);
}
mover(32, 'Norte');
