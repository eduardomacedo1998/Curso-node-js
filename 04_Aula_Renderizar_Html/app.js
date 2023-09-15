const express = require('express')

const app = express()

app.get("/home", function(req,res){// /home sera uma rota que apontara para a pagina home
       res.sendFile(__dirname + "/html/index.html") // A var __dirname traz o caminho diretorio ate a pasta do arquivo 
    //senFile  utilizamos para mostrar onde esta nosso arquivo no diretorio 
})

app.get("/sobre", function(req,res){
    res.sendFile(__dirname + "/html/sobre.html")

})



app.listen(8081, ()=>{
       console.log("servidor funcionando")
})