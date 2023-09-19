
const Sequelize = require("sequelize")

const sequelize = new Sequelize('dados', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
})


const Postagens = sequelize.define('postagens',{  // CRIANDO UM MODULO USANDO SEQUELIZE 
     titulo: {
        type: Sequelize.STRING // definindo o tipo da variavel string equivale ao varchar
     },

     conteudo: {
        type: Sequelize.TEXT 
     },
})


usuarios.create({
    nome_user: "pedro",
    senha: "minhasenha"
})





