const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'root',
    database: 'loja_de_carros'
});

module.exports = pool; //Mysql ão precisa de conect explícito
// singleton - cria uma unica instancia da conexão de banco de dados 
// ou outras conexões

// npm install mysql2