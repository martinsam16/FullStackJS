let p1 = new Promise((resolve, reject) => setTimeout(resolve, 500, 'Hola mundo'));
let p2 = new Promise((resolve, reject) => setTimeout(resolve, 600, 'Segundo hola mundo'));
let p3 = Promise.reject();

let saluda = () => console.log('Hola a todos xd');

Promise.all([p1, p2, p3]).then(
    resultados => {
        console.log(resultados);
        saluda();
    }
).catch(() => console.log('Fallé xd'));