/*
function displayUser(user:{firtsname:string, lastname:string}){
    console.log(user.firtsname+' '+user.lastname);
}

let myUser = {firstName: 'Jhon', lastname: 'Doe'};
displayUser(myUser);
*/
function displayUser(user) {
    if (user.email) {
        console.log(user.firstName + ' ' + user.lastName + ' ' + user.email);
    }
    else {
        console.log(user.firstName + ' ' + user.lastName);
    }
}
var myUser = {
    firstName: 'Martin',
    lastName: 'Saman',
    tipo: 'Oro'
};
var myOtherUser = {
    firstName: 'Martin',
    lastName: 'Saman',
    email: '...@',
    tipo: 'Platino'
};
var getUser;
getUser = function (name, years) {
    return 'Tu nombre es ' + name + ' edad: ' + years;
};
console.log(getUser('Martín', 18));
