class Animal{
    //and private: dont access for other classes
    protected name: string;

    constructor(name: string){
        this.name = name;
    }

    getName(){
        return this.name;
    }

    setName(name: string){
        this.name = name;
    }
}

class Dog extends Animal{
    constructor(){
        super(name);
        console.log(this.name);
    }
}

let dog = new Animal('Henry');
dog.setName('Pipipoupou');
console.log(dog.getName());