function add(x, y) {
    return x + y;
}
//console.log(add(3,4));
var myAdd = function (x, y) {
    return x + y;
};
//console.log(typeof(myAdd(3, 5)));
//console.log(parseInt('66'));
function getFullName(firstName, lastName) {
    if (lastName == undefined) {
        return firstName;
    }
    return firstName + ' ' + lastName;
}
var nombre = getFullName('Martin');
console.log(nombre);
function getFullNameInfinite(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + ' ' + restOfName.join(' ');
}
var full = getFullNameInfinite('Martin', 'Saman', 'Arata');
console.log(full);
