var express = require('express');
var app = express();

app.get('/', function(req,res){
  res.send("<html><body><h1>Bem vindo ao projeto p2p-exchange</h1></body></html>");
});

app.listen(4080,function(){
    console.log("Servidor online");
    });
