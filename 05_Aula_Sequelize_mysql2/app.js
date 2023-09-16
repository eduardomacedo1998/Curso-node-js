const express = require('express')


const app = express()


app.get('/', function(req,res){

    res.send("Seja bem vindo")

})


app.listen(8081,()=>{
    console.log("servidor funcional na porta 8081")
})