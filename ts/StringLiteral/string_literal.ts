let x: 'Hello';

x = 'Hello';
x = undefined;
x = null;

//console.log(x);

let y: 'Hello' | 'Hola';    // Restricciones
y = 'Hola';

//console.log(y);

let myAdd = function (x: number | string, y: number): number {
    if(typeof x == 'string'){
        x = parseInt(x);
    }
    return x + y;
}

//console.log(myAdd('7',9));

type cardinalDireccion = "Norte" | "Sur" | "Este" | "Oesta";

function mover(distancia: number, direcion: cardinalDireccion){
    console.log('Moviendo '+ distancia + ' al '+ direcion);
}

mover(32,'Norte');