var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        console.log('Persona creada ' + this.name);
    }
    Person.prototype.sayHello = function () {
        console.log(this.name + ' says hello..');
    };
    return Person;
}());
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer(id, name) {
        var _this = _super.call(this, name) || this;
        _this.id = id;
        console.log('Customer created: ' + _this.id + ' ' + _this.name);
        return _this;
    }
    Customer.prototype.payBalance = function () {
        console.log('Customer ' + this.id + ' has paid..');
    };
    return Customer;
}(Person));
var martin = new Person('Martin');
var maricarmen = new Customer(1, 'Maricarmen');
maricarmen.sayHello();
