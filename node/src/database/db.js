const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'fullcycle_db',
    user: 'root',
    password: 'docker',
    database: 'fullcycleDB',
    port: 3306
})

module.exports = conexao