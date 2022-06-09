//Vamos iniciar importando os modulos do SQLITE3

const sqlite3 = require('sqlite3')
// quando passamos a const entre chaves, o javascript busca dentro da pasta sqlite somente o arquivo com o nome dentro das chaves, no caso o "open".
const { open } = require('sqlite')

module.exports = () =>
  open({
    //O filename vai receber o caminho do banco de dados
    filename: './src/db/rocketq.sqlite',
    // o driver e quem comanda o banco de dados
    driver: sqlite3.Database
  })
