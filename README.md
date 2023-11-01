# Grupo6-React-Serratec
Projeto final da Unidade de Desenvolvimento Web (React).

# Visão Geral

O projeto final da disciplina de WEB no SERRATEC consiste na criação de uma aplicação de comércio eletrônico (e-commerce).

## Objetivos

1. Criar uma aplicação React que permita aos usuários navegar pelo site, adicionar produtos desejados ao carrinho e realizar compras quando desejarem.

## Especificações

Para a execução do projeto, é necessário levar em consideração as seguintes considerações e regras:

### Tela de Login

1. Tela de login que solicita:
   a. Email
   b. Senha

### Tela de Listagem de Produtos

2. Tela de listagem de produtos:
   a. Deve ser possível filtrar produtos pelo nome.
   b. Produtos sem quantidade em estoque não devem ser exibidos.

### Tela de Informações do Produto

3. Tela de informações detalhadas sobre um produto específico.

### Tela ou Modal do Carrinho

4. Qualquer produto pode ser adicionado ao carrinho.
   a. O usuário poderá escolher a quantidade e adicionar ao carrinho.
   b. Opção para esvaziar o carrinho.
   c. O carrinho deve ser acessível de qualquer parte da aplicação.

### Finalização da Compra

5. Se o usuário desejar comprar, poderá acessar o carrinho para finalizar a compra.
   a. Devido à limitação da API, ao finalizar a compra, deve ser feita uma solicitação para reduzir imediatamente a quantidade de produtos.
   b. Após os passos acima, redirecionar para a tela de Pedidos Realizados, que conterá uma lista de todos os pedidos feitos por esse usuário.

**Regras:**
- Não será permitido utilizar Tailwindcss e Bootstrap.
- Qualquer biblioteca de componentes pode ser utilizada.
- Para gerenciamento de estados, apenas o Context API poderá ser utilizado. Libs como Redux, Recoil, Zustand e etc. não podem.
- TODOS os integrantes do grupo devem participar.
- Não poderá ser utilizado Next nem outro framework parecido e as rotas devem ser feitas utilizando React Router Dom conforme versão 6.

**Entidades:**
- A entidade "Users" deve conter no mínimo os seguintes campos:
  - Nome
  - Email
  - Senha

- A entidade "Produto" deve conter no mínimo os seguintes campos:
  - Nome
  - Preço
  - Quantidade
  - Descrição
  - Imgurl
  - Favoritos

- A entidade "Pedidos" deve conter no mínimo os seguintes campos:
  - Valor Total
  - Iduser
  - Itens
