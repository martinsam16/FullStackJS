// Enum
var Color;
(function (Color) {
    Color[Color["rojo"] = 3] = "rojo";
    Color[Color["azul"] = 6] = "azul";
    Color[Color["verde"] = 8] = "verde";
})(Color || (Color = {}));
var x = Color.verde;
console.log(x);
var PayLog;
(function (PayLog) {
    PayLog[PayLog["mon"] = 125.5] = "mon";
    PayLog[PayLog["tues"] = 95.66] = "tues";
    PayLog[PayLog["wed"] = 0] = "wed";
})(PayLog || (PayLog = {}));
var payCheck = PayLog.mon + PayLog.tues;
console.log(payCheck);
// Any
var y;
y = 'Hola';
y = true;
y = 12.2;
console.log(y);
var z;
z = ['sd', 12, true];
console.log(z);
