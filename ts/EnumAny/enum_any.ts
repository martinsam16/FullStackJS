// Enum

enum Color {
    rojo = 3,
    azul = 6,
    verde = azul + 2
}

let x : Color = Color.verde;
console.log(x);

enum PayLog{
    mon = 125.50,
    tues = 95.66,
    wed = 0
}

let payCheck = PayLog.mon + PayLog.tues;
console.log(payCheck);

// Any

let y: any;

y = 'Hola';
y = true;
y = 12.2;

console.log(y);

let z: any[];

z = ['sd',12,true];

console.log(z);