var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/',function(){
	res.redirect('/index.html');
})

app.listen('4000',function(){
	console.log('RX Server started @4000');
});