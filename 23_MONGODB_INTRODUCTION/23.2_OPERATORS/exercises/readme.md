## MONGODB OPERATORS EXERCISES

**Exercício 1**: Inspecione um documento para que você se familiarize com eles. Entenda os campos e os níveis existentes no documento escolhido.

```javascript
db.heroes.find().limit(1).pretty();
```

**Exercício 2**: Selecione todos os super-heróis com menos de 1.80m de altura. Lembre-se de que essa informação está gravada em centímetros.

```javascript
db.heroes.find({ "aspects.height": { $lt: 180 } }).pretty();
```

**Exercício 3**: Retorne o total de super-heróis menores que 1.80m.

```javascript
db.heroes.find({ "aspects.height": { $lt: 180 } }).count();
```

**Exercício 4**: Retorne o total de super-heróis com até 1.80m.

```javascript
db.heroes.find({ "aspects.height": { $lte: 180 } }).count();
```

**Exercício 5**: Selecione um super-herói com 2.00m ou mais de altura.

```javascript
db.heroes.find({ "aspects.height": { $gte: 200 } }).limit(1).pretty();
```

**Exercício 6**: Retorne o total de super-heróis com 2.00m ou mais.

```javascript
db.heroes.find({ "aspects.height": { $gte: 200 } }).count();
```

**Exercício 7**: Selecione todos os super-heróis que têm olhos verdes.

```javascript
db.heroes.find({ "aspects.eyeColor": "green" }).pretty();
```

**Exercício 8**: Retorne o total de super-heróis com olhos azuis.

```javascript
db.heroes.find({ "aspects.eyeColor": "blue" }).count();
```

**Exercício 9**: Utilizando o operador $in , selecione todos os super-heróis com cabelos pretos ou carecas ( "No Hair" ).

```javascript
db.heroes.find({ "aspects.hairColor": { $in: ["black", "No Hair"] } }).pretty();
```

**Exercício 10**: Retorne o total de super-heróis com cabelos pretos ou carecas ( "No Hair" ).

```javascript
db.heroes.find({ "aspects.hairColor": { $in: ["black", "No Hair"] } }).count();
```

**Exercício 11**: Retorne o total de super-heróis que não tenham cabelos pretos ou não sejam carecas.

```javascript
db.heroes.find({
  "aspects.hairColor": { $not: { $in: ["black", "No Hair"] } }
}).count();
```

**Exercício 12**: Utilizando o operador $not , retorne o total de super-heróis que não tenham mais de 1.80m de altura.

```javascript
db.heroes.find({ "aspects.height": { $not: { $gt: 180 } }}).count();
```

**Exercício 13**: Selecione todos os super-heróis que não sejam humanos e não sejam maiores do que 1.80m .

```javascript
db.heroes.find({ $and: [
  { "race": { $not: { $eq: "Human" } } },
  { "aspects.height": { $lte: 180 } }
]}).pretty();
```

**Exercício 14**: Selecione todos os super-heróis com 1.80m ou 2.00m de altura e que sejam publicados pela Marvel Comics .

```javascript
db.heroes.find({ $and: [
  { "aspects.height": { $in: [180, 200] } },
  { "publisher": { $eq: "Marvel Comics" } }
]}).pretty();
```

**Exercício 15**: Selecione todos os super-heróis que pesem entre 80kg e 100kg , sejam Humanos ou Mutantes e não sejam publicados pela DC Comics .

```javascript
db.heroes.find({ $and: [
  { "aspects.weight": { $gte: 80 } },
  { "aspects.weight": { $lte: 100 } },
  { "publisher": { $not: { $eq: "Marvel Comics" } } }
]}).pretty();
```

**Exercício 16**: Retorne o total de documentos que não contêm o campo race .

```javascript
db.heroes.find({ "race": { $exists: false } }).pretty();
```

**Exercício 17**: Retorne o total de documentos que contêm o campo hairColor .

```javascript
db.heroes.find({ "aspects.hairColor": { $exists: true } }).count();
```

**Exercício 18**: Remova apenas um documento publicado pela Sony Pictures .

```javascript
db.heroes.deleteOne({ "publisher": "Sony Pictures" });
```

**Exercício 19**: Remova todos os documentos publicados pelo George Lucas .

```javascript
db.heroes.deleteMany({ "publisher": "George Lucas" });
```
