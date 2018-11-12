var express=require('express');
var path = require('path');
var app = express();


app.use(express.static(path.join(__dirname,'SubodhIO.github.io')));

app.listen('4000',function(){
    console.log('Boffo server started @4000');
});

app.get('/',function(req,res){
    res.redirect('views/home.html');
});