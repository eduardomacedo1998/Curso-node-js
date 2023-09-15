const express = require('express')  // importanto o modulo do express

const app = express() // criando a instanticia do express na const app



app.get("/home", function(req,res){ 

    res.send("./index.html")

})

app.get("/pagina_vendas", function(req,res){ 

    res.send("seja bem vindo a pagina de vendas !!")

})



app.listen(8081, ()=>{ // liganod servidor e utilizando uma função callbeck
    console.log("servidor rodando na porta 8081")
})