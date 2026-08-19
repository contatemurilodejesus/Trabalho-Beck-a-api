🧁 API Confeitaria - Gestão de Clientes
📌 Nome do Sistema
API Confeitaria - Gestão de Clientes
🎯 Objetivo do Projeto
O objetivo deste projeto é disponibilizar uma API REST centralizada para gerenciar o cadastro de clientes de uma confeitaria. O sistema permite realizar as operações fundamentais de cadastro, consulta, atualização e remoção de dados de clientes, automatizando o controle de contatos e pedidos.
📝 Descrição da Aplicação
A aplicação consiste em um serviço backend desenvolvido em Node.js utilizando a biblioteca Express. A API está integrada a um banco de dados relacional MySQL (confeitaria_db) através do driver mysql2 e utiliza o middleware cors para permitir requisições de origens externas (como uma interface em frontend).
A tabela de clientes no banco de dados armazena as seguintes informações:
id: Identificador único do cliente (Chave Primária / Auto Incremento);
nome: Nome do cliente;
email: E-mail de contato do cliente.
🛠️ Tecnologias Utilizadas
Node.js (Ambiente de execução)
Express (Framework backend para criação da API)
MySQL (Banco de dados relacional)
mysql2 (Driver de conexão com o banco de dados MySQL)
cors (Middleware para controle de acesso às rotas da API)
📂 Estrutura das Pastas
Plaintext
TRABALHO-BECK-A-API/
├── backend/
│   ├── db.js              # Configuração da conexão com o MySQL
│   └── server.js          # Servidor Express, rotas do CRUD e lógica da API
├── database/              # Scripts SQL para criação do banco e tabelas
├── frontend/              # Interface do usuário
├── node_modules/          # Dependências do Node.js
├── package-lock.json      # Mapeamento das versões das dependências
└── package.json           # Configuração das dependências e scripts do Node


⚙️ Como Instalar o Projeto
Pré-requisitos
Node.js instalado na máquina (Download Node.js)
Banco de Dados MySQL ativo localmente (ex: XAMPP, MySQL Workbench ou Docker)
Passo a Passo
Clonar o repositório:
Bash
git clone <URL_DO_REPOSITORIO>
cd TRABALHO-BECK-A-API




Instalar as dependências:
Bash
npm install




Configurar o Banco de Dados:
Certifique-se de ter o MySQL ativo na sua máquina com as credenciais configuradas no arquivo backend/db.js:
Host: localhost
User: root
Password: 1234
Database: confeitaria_db
Execute o comando SQL abaixo no seu MySQL para criar a tabela de clientes:
SQL
CREATE DATABASE IF NOT EXISTS confeitaria_db;
USE confeitaria_db;

CREATE TABLE IF NOT EXISTS clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL
);




🚀 Como Executar a API
Na raiz do projeto, execute o servidor backend digitando no terminal:
Bash
node backend/server.js


A API estará em execução no endereço: http://localhost:3000 (ou na porta configurada em seu server.js).
🔌 Endpoints Disponíveis
Método
Endpoint
Descrição
Corpo da Requisição (JSON)
GET
/clientes
Lista todos os clientes cadastrados
Nenhum
GET
/clientes/:id
Busca um cliente específico pelo ID
Nenhum
POST
/clientes
Cadastra um novo cliente
{"nome": "Maria Silva", "email": "maria@email.com"}
PUT
/clientes/:id
Atualiza os dados de um cliente existente
{"nome": "Maria Silva Santos", "email": "maria.santos@email.com"}
DELETE
/clientes/:id
Remove um cliente do sistema pelo ID
Nenhum

📌 Etapa 05 – Registrar a Evolução do Projeto
A equipe utilizou commits frequentes no Git para registrar a evolução da aplicação. Exemplos de mensagens adotadas:
Configuração inicial do projeto
Implementação da API REST
Criação das rotas
Integração com MySQL
Organização da arquitetura
Atualização da documentação
👥 Integrantes da Equipe
Murilo de Jesus Costa , Jhenyfer Oliveira, Lucas Nogueira
[Nome do Integrante Instituição: SENAI Candeias
Professor Orientador: Adalberto Santana
