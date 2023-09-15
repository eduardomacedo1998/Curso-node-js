var HTTP = require('http');   // importando o modulo http


HTTP.createServer(function(req,res){  // res e req fazem parte da função callbeck 

    res.end("ola seja bem vindo")

}).listen(8081); // criando um servidor e listando a porta a utilizar

console.log("O servidor esta rodando !!")


