## ORM: SEQUELIZE Exercises

#### Instruções para realização dos exercícios

Neste exercício vamos criar uma API simples, onde será possível criar um livro ou listar todos os livros da base de dados. Vamos utilizar MySQL como banco de dados e Sequelize como nosso ORM.
Detalhes do projeto
Crie uma nova pasta e inicie um projeto com Express:

```bash
npm init -y
```
```bash
npm install express body-parser
```

Crie o arquivo index.js ;

Instale o pacote sequelize e o mysql2 :

```bash
npm install sequelize mysql2
```

Instale o pacote sequelize-cli como uma dependência de desenvolvimento:

```bash
npm install --save-dev sequelize-cli
```

Use o Sequelize-CLI para iniciar a configuração do ORM:

```bash
npx sequelize init
```

Esse comando irá gerar as pastas models , seeder , config e migration dentro do seu projeto.
Agora, aproveitando a CLI, vamos criar nossa primeira migration para books usando:

```bash
npx sequelize migration:generate --name create-books
```

Dentro do up , crie uma tabela Books com os atributos: id (nossa chave primária), title (string e não pode ser nulo), author (string e não pode ser nulo), pageQuantity (integer e pode ser nulo) e createdAt (date e não pode ser nulo).
Dentro do down , drope a tabela Books .
Crie seu banco de dados e coloque todas as configurações dentro do arquivo config/config.js .
Agora você pode rodar as migrations (seu banco precisa estar configurado certinho para isso funcionar):

```bash
 npx sequelize db:migrate
```

Crie um arquivo Book.js dentro da pasta models e crie seu modelo lá dentro, respeitando os atributos que definimos nas migrations. Dica - Preste atenção em como o arquivo models/index.js é definido, ele vai te ajudar a importar seus modelos mais facilmente.

#### Exercise

Exercício : Crie os controllers do seu projeto com as seguintes rotas:

* GET /books - lista todos os livros;
* GET /book/:id - pega o livro com o id especificado;
* POST /book - cria um novo livro;
* POST /book/:id - sobrescreve o livro com ID selecionado;
* DELETE /book/:id - deleta um livro;

Em caso de erro, os endpoints devem retornar status code 500 com a mensagem: 'Algo deu errado'.
