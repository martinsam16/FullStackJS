function myStrictFunct(arg) {
    return arg;
}
function myAnyStrinct(arg) {
    return arg;
}
function myGeneric(arg) {
    return arg;
}
var x = myGeneric('hola');
var y = myGeneric(8);
var z = myGeneric('Hola');
//console.log(z);
// Multiple args
function myGenericMultiple(arg1, arg2) {
    var str = arg1 + ' ' + arg2;
    return str;
}
var f = myGenericMultiple('Hola', 9);
//console.log(f);
// Arrays
function myGenericArray(arg) {
    return arg;
}
var arreglo = myGenericArray([1, 2, '2']);
function myGenericFromInt(arg) {
    return arg;
}
var h = myGenericFromInt;
console.log(h(4545));
