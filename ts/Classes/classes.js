var Persona = /** @class */ (function () {
    function Persona(first, last, age) {
        console.log('Construct run..');
        this.firstName = first;
        this.lastName = last;
        this.age = age;
    }
    Persona.prototype.sayHello = function () {
        console.log(this.firstName + ' says hello..');
        return this.firstName + ' says hello..';
    };
    return Persona;
}());
var martin = new Persona('Martin', 'Saman', 18);
var maricarmen = new Persona('Maricarmen', 'xdxd', 18);
//martin.age = 282;
//console.log(martin.age);
maricarmen.sayHello();
