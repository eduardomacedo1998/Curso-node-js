const express = require('express')
const  mysql2 = require('mysql2');



const app = express()

const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'bancoprincipal'
    
})


connection.connect(function(err){
    console,log("A conexão com o banco foi um sucesso !!")
})


app.listen(8081,()=>{
    console.log("servidor funcional na porta 8081")
})

