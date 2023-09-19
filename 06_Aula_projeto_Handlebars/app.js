const express = require('express')// importando o express
const app = express() // criando instancia do express
const handlebars = require('express-handlebars')
const bodyParser =  require('body-parser')
const Sequelize = require("sequelize")


// Config
  // Template Engine

  app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

  // Body parser 

  app.use(bodyParser.urlencoded({extended:false}))
  app.use(bodyParser.json())

  // Conexao com o banco de dados Mysql

  const sequelize = new Sequelize('dados', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
})


app.get('/', function(req, res){
    res.render('formulario')
})


app.post('/add', function(req, res){
    
    res.send("texto: "+req.body.titulo+"  Conteudo: "+req.body.conteudo)
})



app.listen(8081, function(){
    console.log("deu certo");
})