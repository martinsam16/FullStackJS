/*
function displayUser(user:{firtsname:string, lastname:string}){
    console.log(user.firtsname+' '+user.lastname);
}

let myUser = {firstName: 'Jhon', lastname: 'Doe'};
displayUser(myUser);
*/

interface memberShip {
    tipo?: string;
}

interface User extends memberShip {
    firstName: string;
    lastName: string;
    email?: string;
}

function displayUser(user: User) {
    if (user.email) {
        console.log(user.firstName + ' ' + user.lastName + ' ' + user.email);

    } else {
        console.log(user.firstName + ' ' + user.lastName);
    }

}

let myUser = {
    firstName: 'Martin',
    lastName: 'Saman',
    tipo: 'Oro'
};
let myOtherUser = {
    firstName: 'Martin',
    lastName: 'Saman',
    email: '...@',
    tipo: 'Platino'
};
//displayUser(myUser);
//displayUser(myOtherUser);

interface userFunc {
    (nombre: string, edad: number): string;
}

let getUser: userFunc;
getUser = (name: string, years: number): string => {
    return 'Tu nombre es ' + name + ' edad: ' + years;
}

console.log(getUser('Martín',18));