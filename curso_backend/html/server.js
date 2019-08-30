const express = require('express');
const app = express();

// motor de vistas
app.set('view engine', 'ejs');
// statics
app.use('/assets',express.static('assets'),{
    maxAge: '5h' // http://www.github.com/zeit/ms
}); // middleware

app.get('/', function(req, res){
    res.render('index');
    /*
    res.sendFile('index.html',{
        root: __dirname
    });
    */
});

app.listen(3000);