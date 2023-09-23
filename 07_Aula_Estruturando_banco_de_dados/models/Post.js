const db = require('./db')

const post = db.sequelize.define('postagens2',{
    tiulo: {
        type: db.Sequelize.STRING
    },


    conteudo: {
        type: db.Sequelize.TEXT
    }

})

// Post.sync({force:true}) criação da tabela postagens2 


module.exports = post