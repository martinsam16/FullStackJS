function myStrictFunct(arg: number): number {
    return arg;
}

function myAnyStrinct(arg: any): any {
    return arg;
}

function myGeneric<T>(arg: T): T {
    return arg;
}

let x = myGeneric<string>('hola');
let y = myGeneric<number>(8);
let z = myGeneric('Hola');
//console.log(z);

// Multiple args
function myGenericMultiple<T1, T2>(arg1: T1, arg2: T2) {
    let str = arg1 + ' ' + arg2;
    return str;
}

let f = myGenericMultiple('Hola', 9);
//console.log(f);

// Arrays
function myGenericArray<T>(arg: T[]): T[] {
    return arg;
}

let arreglo = myGenericArray([1,2,'2']);
//console.log(arreglo.length);

//Interfaces
interface MyGenericFn{
    <T>(arg: T): T;
}

function myGenericFromInt<T>(arg: T): T{
    return arg;
}

let h: MyGenericFn = myGenericFromInt;
console.log(h(4545));
