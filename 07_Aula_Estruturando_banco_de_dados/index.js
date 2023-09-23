const express = require('express')// importando o express
const app = express() // criando instancia do express
const handlebars = require('express-handlebars')
const bodyParser =  require('body-parser')
const Post = require('./models/post')

// configuração bory-parser 
app.use(bodyParser.urlencoded({extended:false}))
  app.use(bodyParser.json())

// preparando rota para receber dos de algum formulario via post 
app.post('/add', function(req, res){
   
    Post.create({
        titulo: req.body.titulo,
        
    })
})
