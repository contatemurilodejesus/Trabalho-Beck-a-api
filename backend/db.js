const mysql = require("mysql2");
const conexao =  mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"confeitaria_db"
});
conexao.connect((erro) => {
    if(erro){
        console.log("erro ao conectar ao banco de dados.");
        return;

    }
    console.log(" Banco de dados conectado com sucesso")
});
module.exports = conexao;