const Sequelize = require("sequelize")

  // Conexao com o banco de dados Mysql

const sequelize = new Sequelize('dados', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
})


module.exports = {
    Sequelize: Sequelize,
    sequelize:sequelize
}