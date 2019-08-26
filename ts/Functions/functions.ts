function add(x: number, y: number): number {
    return x + y;
}
//console.log(add(3,4));

let myAdd = function (x: number, y: number): number {
    return x + y;
}

//console.log(typeof(myAdd(3, 5)));

//console.log(parseInt('66'));

function getFullName(firstName: string, lastName?: string): string{
    if(lastName == undefined){
        return firstName;
    }
    return firstName + ' ' + lastName;
}

let nombre = getFullName('Martin');
console.log(nombre);

function getFullNameInfinite(firstName: string, ...restOfName: string[]){
    return firstName + ' '+ restOfName.join(' ');
}

let full = getFullNameInfinite('Martin','Saman','Arata');
console.log(full);