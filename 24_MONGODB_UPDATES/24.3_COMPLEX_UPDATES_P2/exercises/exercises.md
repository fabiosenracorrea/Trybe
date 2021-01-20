# Complex Updates: Array Exercises

These exercises are based on [this](./exercise_data.js) set of data;

Utilizando o operador $all , retorne todos os filmes que contenham action e adventure no array category .

```javascript
db.movies.find({
  "category": { $all: ["action", "adventure"] }
});
```

Agora retorne os filmes que contenham action no array category e possuem nota do IMDB maior do que 7 .

```javascript
db.movies.find({
  $and: [
    { "category": { $all: ["action", "adventure"] } },
    { "imdbRating": { $gt: 7 } }
  ]
});
```

Adicione um array chamado ratings ao filme Batman com os seguintes valores: [85, 100, 102, 105] .

```javascript
db.movies.updateOne(
  { "title": "Batman" },
  { $set: { "ratings": [85, 100, 102, 105] } }
);
```

Adicione um array chamado ratings ao filme Godzilla com os seguintes valores: [78, 52, 95, 102] .

```javascript
db.movies.updateOne(
  { "title": "Godzilla" },
  { $set: { "ratings": [78, 52, 95, 102] } }
);
```

Adicione um array chamado ratings ao filme Home Alone com os seguintes valores: [200, 99, 65] .

```javascript
db.movies.updateOne(
  { "title": "Home Alone" },
  { $set: { "ratings": [200, 99, 65] } }
);
```

Retorne todos os filmes com ratings maior do que 103, exibindo apenas os campos title e ratings .

```javascript
db.movies.find(
  { "ratings": { $gt: 103 } },
  { "title": 1, "ratings": 1, "_id": -1 }
).pretty();
```

Retorne todos os filmes com ratings entre 100 e 105 , exibindo apenas os campos title e ratings .

```javascript
db.movies.find(
  { "ratings": { $elemMatch: { $gte: 100, $lte: 105 } } },
  { "title": 1, "ratings": 1, "_id": -1 }
).pretty();
```

Retorne todos os filmes com ratings entre 64 e 105 e divisíveis por 9 , exibindo apenas os campos title e ratings .

```javascript
db.movies.find(
  { "ratings": { $elemMatch:
    {
      $gte: 64,
      $lte: 99,
      $mod: [9, 0]
    } } },
  { "title": 1, "ratings": 1, "_id": -1 }
).pretty();
```

Retorne os filmes da categoria adventure e com ratings maior do que 103 , exibindo apenas os campos title , ratings e category .

```javascript
db.movies.find(
  {
    $and: [
      { "category": "adventure" },
      { "ratings": { $gt: 103 } }
    ]
  },
  { "title": 1, "ratings": 1, "category": 1, "_id": -1 }
).pretty();
```

Retorne somente o título de todos os filmes com dois elementos no array category .

```javascript
db.movies.find(
  { "category": { $size: 2 } },
  { "title": 1, "_id": -1 }
).pretty();
```

Retorne somente o título de todos os filmes com quatro elementos no array ratings .

```javascript
db.movies.find(
  { "ratings": { $size: 4 } },
  { "title": 1, "_id": -1 }
).pretty();
```

Busque os filmes em que o módulo 5 do campo budget seja 0 e que o array category tenha tamanho 2 .

```javascript
db.movies.find(
  {
    "category": { $size: 2 },
    "budget": { $mod: [5, 0] },
  },
  { "title": 1, "_id": -1 }
).pretty();
```

Retorne os filmes da categoria "sci-fi" ou que possua o ratings maior do que 199, exibindo apenas os campos title , ratings e category .

```javascript
db.movies.find(
  {
    $or: [
      { "category": "sci-fi" },
      { "ratings": { $gt: 199 } }
    ]
  },
  { "title": 1, "ratings": 1, "category": 1, "_id": -1 }
).pretty();
```

Retorne os filmes em que o ratings possua tamanho 4 e que seja da category "adventure" ou "family", mas que não tenha o imdbRating menor que 7.

```javascript
db.movies.find(
  {
    "category": { $in: ["adventure", "family"] },
    "ratings": { $size: 4 },
    "imdbRating": { $gte: 7 }
  },
  { "title": 1, "ratings": 1, "category": 1, "_id": -1 }
).pretty();
```

Adicione o campo description no filme Batman com o seguinte valor: "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker" .

```javascript
db.movies.updateOne(
  { "title": "Batman" },
  { $set: { "description": "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker" } }
)
```

Adicione o campo description no filme Godzilla com o seguinte valor: "The world is beset by the appearance of monstrous creatures, but one of them may be the only one who can save humanity" .

```javascript
db.movies.updateOne(
  { "title": "Godzilla" },
  { $set: { "description": "The world is beset by the appearance of monstrous creatures, but one of them may be the only one who can save humanity" } }
)
```

Adicione o campo description no filme Home Alone com o seguinte valor: "An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation" .

```javascript
db.movies.updateOne(
  { "title": "Home Alone" },
  { $set: { "description": "An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation" } }
)
```

Utilizando o operador $regex , retorne todos os filmes em que a descrição comece com a palavra "The" .

```javascript
db.movies.find(
  { "description": { $regex: /^The/ } }
).pretty();
```

Utilizando o operador $regex , retorne todos os filmes em que a descrição termine com a palavra "humanity" .

```javascript
db.movies.find(
  { "description": { $regex: /humanity$/ } }
).pretty();
```

Crie um índice do tipo text no campo description .

```javascript

```

Utilizando o operador $text , busque por filmes que contenham o termo "vacation" .

```javascript
db.movies.createIndex({
  "description": "text"
});
```

Utilizando o operador $text , busque por filmes que contenham os termos "monstrous" e "criminal" .

```javascript
db.movies.find({
  $text: {
    $search: "monstrous criminal",
  }
}).pretty();
```

Utilizando o operador $text, busque por filmes que contenham a frase "when he is accidentally" .

```javascript
db.movies.find({
  $text: {
    $search: "\"when he is accidentally\"",
  }
}).pretty();
```
