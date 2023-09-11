# API com Node.js e MongoDB

Este é um projeto de exemplo de uma API RESTful desenvolvida em Node.js com o uso de MongoDB. A API realiza operações CRUD (Criar, Ler, Atualizar, Excluir) para produtos, clientes e pedidos.

## Tecnologias Utilizadas

- Node.js
- Express.js
- MongoDB
- Mongoose

## Funcionalidades

### CRUD REST para Produtos

A API permite realizar operações CRUD para produtos:

- Criando um Produto
- Listando todos os Produtos
- Listando um Produto pelo slug
- Listando um Produto pelo Id
- Listando os Produtos de uma tag
- Atualizando um produto
- Excluindo um produto

### Controllers e Rotas

As rotas e controladores são usados para manipular as solicitações HTTP. Exemplos de rotas e controllers para produtos estão incluídos no projeto.

### Configuração do MongoDB

A API está configurada para se conectar a um banco de dados MongoDB.

### Models

Foram criados modelos usando o Mongoose para representar os dados do banco de dados:

- Modelo de Produto
- Modelo de Cliente
- Modelo de Pedido

### Validações

As validações são realizadas para garantir que os dados inseridos sejam consistentes e válidos.

### Repositórios

O projeto utiliza a estrutura de repositórios para separar a lógica de banco de dados dos controladores.

### Async/Await

O projeto utiliza funções assíncronas e `async/await` para lidar com operações que envolvem chamadas assíncronas, como operações de banco de dados.
