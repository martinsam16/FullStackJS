const requestPromise = require('request-promise');

//Promise

/*
    fullfiled
    rejected
    pending
    setled
*/
requestPromise('http://www.google.com').then(function (html) {
    console.log('Terminé la petición de google xd');
}).catch(function (err) {
    console.log(err);
})



function asincrono(){
    return new Promise(function(resolve, reject){
        resolve('Todo salió bien');

        reject(new Error('F'));
    });
}

const request = require('request');

function leer(url){
    return new Promise(function (resolve, reject){
        request(url, function(err, response){
            if(err){
                reject(err);
            }else{
                resolve(response);
            }
        });
    });
}

leer('http://www.google.com').then(function(response){
    console.log(response);
}).catch(function(err){
    console.log(err);
})