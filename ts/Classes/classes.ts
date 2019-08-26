class Persona {
    firstName: string;
    lastName: string;
    age: number;

    constructor(first: string, last: string, age: number){
        console.log('Construct run..')
        this.firstName = first;
        this.lastName = last;
        this.age = age;
    }

    sayHello(){
        console.log(this.firstName+' says hello..');
        return this.firstName+' says hello..';
    }
}

let martin = new Persona('Martin','Saman',18);
let maricarmen = new Persona('Maricarmen','xdxd',18);
//martin.age = 282;
//console.log(martin.age);
maricarmen.sayHello();