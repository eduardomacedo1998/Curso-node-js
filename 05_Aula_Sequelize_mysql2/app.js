const express = require('express')  // importanto o modulo do express

const app = express() // criando a instanticia do express na const app

const Sequelize = require("sequelize")

const sequelize = new Sequelize('produtos', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})



sequelize.authenticate().then(function(){ // verificação de erros na conexeção 
    console.log("conectado com sucesso")
}).catch(function(erro){
    console.log("falha ao si conectar"+erro)
})


app.listen(8081, ()=>{ // liganod servidor e utilizando uma função callbeck
    console.log("servidor rodando na porta 8081")
})