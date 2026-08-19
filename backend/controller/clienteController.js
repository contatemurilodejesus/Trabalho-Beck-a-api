
const conexao = require("../config/db");

// READ (GET)
const listarClientes = (req, res) => {
  const sql = "SELECT * FROM clientes";
  conexao.query(sql, (erro, resultados) => {
    if (erro) {
      return res.status(500).json({ mensagem: "Erro ao consultar clientes." });
    }
    res.json(resultados);
  });
};

// CREATE (POST)
const cadastrarCliente = (req, res) => {
  const { nome, email } = req.body;
  const sql = "INSERT INTO clientes (nome, email) VALUES (?, ?)";

  conexao.query(sql, [nome, email], (erro, resultado) => {
    if (erro) {
      return res.status(500).json({ mensagem: "Erro ao cadastrar cliente." });
    }
    res.status(201).json({
      mensagem: "Cliente cadastrado com sucesso.",
      id: resultado.insertId,
      nome,
      email
    });
  });
};

// UPDATE (PUT)
const atualizarCliente = (req, res) => {
  const id = req.params.id;
  const { nome, email } = req.body;
  const sql = "UPDATE clientes SET nome = ?, email = ? WHERE id = ?";

  conexao.query(sql, [nome, email, id], (erro, resultado) => {
    if (erro) {
      return res.status(500).json({ mensagem: "Erro ao atualizar cliente." });
    }
    if (resultado.affectedRows === 0) {
      return res.status(404).json({ mensagem: "Cliente não encontrado." });
    }
    res.json({
      mensagem: "Cliente atualizado com sucesso.",
      cliente: { id, nome, email }
    });
  });
};

// DELETE
const removerCliente = (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM clientes WHERE id = ?";

  conexao.query(sql, [id], (erro, resultado) => {
    if (erro) {
      return res.status(500).json({ mensagem: "Erro ao remover cliente." });
    }
    if (resultado.affectedRows === 0) {
      return res.status(404).json({ mensagem: "Cliente não encontrado." });
    }
    res.json({ mensagem: "Cliente removido com sucesso." });
  });
};

module.exports = {
  listarClientes,
  cadastrarCliente,
  atualizarCliente,
  removerCliente
};