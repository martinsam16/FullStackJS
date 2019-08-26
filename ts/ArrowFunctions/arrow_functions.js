/*
let getUser = function (name): string {
    return name;
}
*/
var getUser = function (name) {
    return name;
};
//console.log(getUser('Martin Saman'))
/*
let add = function(num1: number, num2:number): number{
    return num1 + num2;
}
*/
var add = function (num1, num2) { return num1 + num2; };
//console.log(add(1, 3));
/*
var User = {
    name: 'Martin',
    age: 18,
    startAging: function () {
        var self = this;
        setInterval(
            function () {
                self.age++;
                console.log(self.age);
            }, 1000
        );
    }
}
*/
var User = {
    name: 'Martin',
    age: 18,
    startAging: function () {
        var _this = this;
        setInterval(function () {
            _this.age++;
            console.log(_this.age);
        }, 1000);
    }
};
var martin = Object.create(User);
martin.startAging();
