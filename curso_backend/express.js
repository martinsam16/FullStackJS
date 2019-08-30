const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// Para POST
app.use(bodyParser.urlencoded({extended: true}));


// localhost:3000/saludo?name=Martin
app.get('/saludo', function(req, res){
    res.send(`Hola ${req.query.name}`);
});


// body x-www-form-urlencoded (Postman)
app.post('/', function(req, res){
    res.send(`Hola ${req.body.name}`);
});

app.listen(3000);