class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
        console.log('Persona creada ' + this.name);
    }

    sayHello() {
        console.log(this.name + ' says hello..');
    }
}

class Customer extends Person {
    id: number;

    constructor(id: number, name: string) {
        super(name);
        this.id = id;
        console.log('Customer created: ' + this.id + ' ' + this.name);
    }

    payBalance() {
        console.log('Customer ' + this.id + ' has paid..');
    }
}

let martin = new Person('Martin');
let maricarmen: Person = new Customer(1, 'Maricarmen');
maricarmen.sayHello();
