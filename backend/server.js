const db = require("./db");

const express = require("express");

const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json());


app.get("/clientes", (req, res) => {
    const sql = "SELECT * FROM clientes";
    db.query(sql, (erro, resultados) => {
        if (erro) {
            return res.status(500).json({
                mensagem: "Erro ao consultar clientes."
            });
        }
        res.json(resultados);
    });
});


app.post("/clientes", (req, res) => {
    const { nome, email } = req.body;
    const sql = `
        INSERT INTO clientes (nome, email)
        VALUES (?, ?)   `;
    db.query(sql, [nome, email], (erro, resultado) => {
        if (erro) {
            return res.status(500).json({
                mensagem: "Erro ao cadastrar cliente."
            });
        }
        res.status(201).json({
            mensagem: "Cliente cadastrado com sucesso.",
            id: resultado.insertId,
            nome,
            email
        });
    });
});

app.put("/clientes/:id",(req,res) => {
  const id = parseInt(req.params.id);
  const cliente = clientes.find(cliente => cliente.id === id);
  if(!cliente){
    return res.status(404).json({
      mensagem:"cliente não encontrado"
    });
  }
  cliente.nome = req.body.nome;
  cliente.email = req.body.email;
  res.json({
    mensagem:"cliente atualizado com sucesso",
    cliente: cliente
  });
});

app.delete("/cliente/:id", (req,res) =>{
  const id = parseInt(req.params.id);
  const indice = clientes.findIndex(cliente => cliente.id === -1);
  if(indice === -1){
    return res.status(404).json({
     mensagem:"cliente não encontrado"
    });
  }
  const clienteRemovido = clientes.splice(indice,1 );
  res.json({
    mensagem:"Cliente removido com sucesso",
    cliente: clienteRemovido[0]
  });

});


app.listen(3000,()=>{
    console.log("servidor iniciado na porta 3000")
});
