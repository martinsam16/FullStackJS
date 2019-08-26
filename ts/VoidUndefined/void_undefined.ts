function logData(): void {
    console.log('Data');
}

//logData();

let x: void = undefined;

let y: undefined = undefined;

let z: null = null;

//console.log(z);

function error(message: string): never{
    throw new Error(message);
}

//error('Un error ocurrió xd');

function infLoop(): never{
    while(true){
        console.log('F');
    }
}
