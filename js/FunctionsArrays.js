let arreglo = ['ruby', 'python', 'java'];
/*
arreglo.forEach((elemento) => {
    console.log(elemento);
});
*/

//Eliminar ruby

arreglo = arreglo.filter(elemento => elemento != 'ruby');

//arreglo.forEach((elemento) => console.log(elemento));

let el = arreglo.find(elemento => elemento == 'python');
//console.log(el);

let numeros = [1, 2, 7, 5, 6];

let cuadrados = numeros.map(numero => numero * numero);

cuadrados.forEach(elemento => console.log(elemento));