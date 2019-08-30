const express = require('express');
const cookieSession = require('cookie-session');

const app =  express();

app.use(cookieSession({
    name: 'galleta',
    keys: ['as3d2s2','asassd23434']
}));

app.get('/', function(req, res){
    req.session.visits = req.session.visits || 0;
    req.session.visits += 1;

    res.send(`${req.session.visits} visit(s)`);
});

app.listen(3000);