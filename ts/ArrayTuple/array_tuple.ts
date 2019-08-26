// ArrayTypes

let a : number[];
let b : string[];
let c : boolean[];

a = [1,2,3];
console.log(a);

b = ['a','b'];
console.log(b);

c = [true, false, true];
console.log(c);

let d : Array<number>;
let e : Array<string>;
let f : Array<boolean>;

let g: [string, number];

g = ['Hola', 1];
console.log(g[0].substring(1));