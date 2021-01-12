## MongoDB introduction Exercises

Utilizando a coleção [bios](https://docs.mongodb.com/manual/reference/bios-example-collection/), construa queries para retornar os seguintes itens:

**Exercício 1:** Retorne o documento com _id igual a 8.

```javascript
db.bios.find({ "_id": 5 });
```

**Exercício 2:** Retorne o documento com _id igual a 8, mas só exiba os campos: _id e name .

```javascript
db.bios.find({ "_id": 8 }, { "name": true });
```

**Exercício 3:** Retorne apenas os campos name e birth do documento com _id igual a 8.

```javascript
db.bios.find({ "_id": 8 }, { "name": true, "birth": true, "_id": false });

```

**Exercício 4:** Retorne todos os documentos em que o campo name.first seja igual a John;

```javascript
db.bios.find({ "name.first": "John" })
```

**Exercício 5:** Retorne os 3 primeiros documentos da coleção bios utilizando o método pretty() .

```javascript
db.bios.find().limit(3).pretty();
```

**Exercício 6:** Retorne 2 documentos da coleção bios pulando os 5 primeiros documentos.

```javascript
db.bios.find().limit(2).skip(5).pretty();
```

Utilizando o mongoimport, importe o arquivo [books.json](./books.json) para a sua instância local do MongoDB e utilize a coleção books para construir queries para as seguintes questões:

**Exercício 7:** Retorne a quantidade de documentos da coleção books .

```javascript
db.books.count()
```

**Exercício 8:** Conte quantos livros existem com o status "PUBLISH" .

```javascript
db.books.find(({ "status": "PUBLISH"  })).count();
```

**Exercício 9:** Exiba os campos title , isbn e pageCount dos 3 primeiros livros. NÃO retorne o campo _id .

```javascript
db.books.find({}, { "title": true, "isbn": true, "pageCount": true, "_id": false }).limit(3).pretty();
```

**Exercício 10**: Pule 5 documentos e exiba os campos _id , title , authors e status do livros com status "MEAP" , limitando-se a 10 documentos.

```javascript
db.books.find({ "status": "MEAP" }, { "title": true, "authors": true, "status": true }).limit(10).skip(5).pretty();
```
