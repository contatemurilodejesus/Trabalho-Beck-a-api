const express = require("express");
const router = express.Router();
const clienteController = require("../controller/clienteController");


router.get("/clientes", clienteController.listarClientes);
router.post("/clientes", clienteController.cadastrarCliente);
router.put("/clientes/:id", clienteController.atualizarCliente);
router.delete("/clientes/:id", clienteController.removerCliente);

module.exports = router;