# Aggregation Exercises

These exercises are based on the 3 collections [here](./exerciseData)

**Exercício 1**: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "MASCULINO" .

```javascript
db.clients.aggregate([
  { $match: {sexo: "MASCULINO" } }
]).pretty();
```

**Exercício 2**: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "FEMININO" e com data de nascimento entre os anos de 1995 e 2005 .

```javascript
db.clients.aggregate([
  { $match: {
    sexo: "FEMININO",
    $and: [
      { dataNascimento: { $gte: ISODate("1995-01-01") } },
      { dataNascimento: { $lte: ISODate("2005-12-31") } },
    ]
  } }
]).pretty();
```

**Exercício 3**: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "FEMININO" e com data de nascimento entre os anos de 1995 e 2005 , limitando a quantidade de documentos retornados em 5 .

```javascript
db.clients.aggregate([
  { $match: {
    sexo: "FEMININO",
    $and: [
      { dataNascimento: { $gte: ISODate("1995-01-01") } },
      { dataNascimento: { $lte: ISODate("2005-12-31") } },
    ]
  } },
  { $limit: 5 }
]).pretty();
```

**Exercício 4**: Conte quantos clientes do estado SC existem na coleção. Retorne um documento em que o campo _id contenha a UF e outro campo com o total.

```javascript
db.clients.aggregate([
  { $match: { "endereco.uf": "SC" } },
  { $group: {
    _id: "$endereco.uf",
    total: { $sum: 1 }
  } }
]);
```

**Exercício 5**: Agrupe os clientes por sexo . Retorne o total de clientes de cada sexo no campo total .

```javascript
db.clients.aggregate([
  { $group: {
    _id: "$sexo",
    total: { $sum: 1 }
  } }
]);
```

**Exercício 6**: Agrupe os clientes por sexo e uf . Retorne o total de clientes de cada sexo no campo total .

```javascript
db.clients.aggregate([
  { $group: {
    _id: { uf: "$endereco.uf", sexo: "$sexo" },
    total: { $sum: 1 }
  } }
]);
```

**Exercício 7**: Utilizando a mesma agregação do exercício anterior, adicione um estágio de projeção para modificar os documentos de saída, de forma que se pareçam com o documento a seguir (não se importe com a ordem dos campos):

```json
{
  "estado": "SP",
  "sexo": "MASCULINO",
  "total": 100
}
```

```javascript
db.clients.aggregate([
  { $group: {
    _id: { estado: "$endereco.uf", sexo: "$sexo" },
    total: { $sum: 1 }
  } },
  { $project: {
    estado: "$_id.estado",
    sexo: "$_id.sexo",
    total: 1,
    "_id": 0
  } }
]);
```

**Exercício 8**: Descubra quais são os 5 clientes que gastaram o maior valor.

```javascript
db.clients.aggregate([
  { $lookup: {
    from: "orders",
    localField: "clienteId",
    foreignField: "clienteId",
    as: "client_orders"
  } },
  { $project: {
    _id: 0,
    nome: 1,
    "valorTotal": { $sum: "$client_orders.valorTotal" }
  } },
  { $sort: { valorTotal: -1 } },
  { $limit: 5 }
]).pretty();
```

**Exercício 9**: Descubra quais são os 10 clientes que gastaram o maior valor no ano de 2019 .

```javascript
db.orders.aggregate([
  { $match: {
      $and: [
        { "dataVenda": { $gte: ISODate("2019-01-01") } },
        { "dataVenda": { $lte: ISODate("2019-12-31") } },
      ]
  }},
  { $group: {
    _id: "$clienteId",
    valorTotal: { $sum: "$valorTotal" }
  } },
  { $sort: { valorTotal: -1 } },
  { $limit: 10 },
  { $lookup: {
      from: "clients",
      localField: "_id",
      foreignField: "clienteId",
      as: "client_info"
  } },
  { $project: {
    _id: 0,
    valorTotal: 1,
    cliente: "$client_info.nome",
  } },
  { $unwind: "$cliente" }
]).pretty();
```

**Exercício 10**: Descubra quantos clientes compraram mais de 5 vezes. Retorne um documento que contenha somente o campo clientes com o total de clientes.

```javascript
db.orders.aggregate([
  { $group: {
    _id: "$clienteId",
    totalCompras: { $sum: 1 }
  } },
  { $match: {
     totalCompras: { $gt: 5 }
  }},
  { $project: {
    clientes: "$totalCompras",
    _id: 0
  } },
]).pretty();
```

**Exercício 11**: Descubra quantos clientes compraram menos de três vezes entre os meses de Janeiro de 2020 e Março de 2020 .

```javascript
db.orders.aggregate([
  { $match: {
      $and: [
        { "dataVenda": { $gte: ISODate("2020-01-01") } },
        { "dataVenda": { $lt: ISODate("2020-04-01") } },
      ]
  }},
  { $group: {
    _id: "$clienteId",
    totalCompras: { $sum: 1 }
  } },
    { $match: {
     totalCompras: { $lt: 3 }
  }},
  { $group: {
    _id: null,
    clientes: { $sum: "$totalCompras" }
  } },
  { $project: {
    _id: 0
  } }
]).pretty();
```

**Exercício 12**: Descubra quais as três ufs que mais compraram no ano de 2020 . Retorne os documentos no seguinte formato:

```json
{
  "totalVendas": 10,
  "uf": "SP"
}
```

```javascript
db.orders.aggregate([
  { $match: {
      "dataVenda": { $gte: ISODate("2020-01-01") },
  }},
  { $group: {
    _id: "$clienteId",
    totalCompras: { $sum: { $size: "$itens" } }
  } },
  { $lookup: {
      from: "clients",
      localField: "_id",
      foreignField: "clienteId",
      as: "client_info"
  } },
  { $project: {
    _id: 0,
    totalCompras: 1,
    cliente: "$client_info.nome",
    uf: "$client_info.endereco.uf"
  } },
  { $unwind: "$cliente" },
  { $unwind: "$uf" },
  { $group: {
    _id: "$uf",
    totalVendas: { $sum: "$totalCompras" } }
  },
  { $project: {
    uf: "$_id",
    totalVendas: 1,
    _id: 0,
  } },
  { $sort: { totalVendas: -1 } },
  { $limit: 3 }
]).pretty();
```

**Exercício 13**: Encontre qual foi o total de vendas e a média de vendas de cada uf no ano de 2019 . Ordene os resultados pelo nome da uf . Retorne os documentos no seguinte formato:

```json
{
  "_id": "MG",
  "mediaVendas": 9407.129225352113,
  "totalVendas": 142
}
```

```javascript
db.orders.aggregate([
  { $match: {
      $and: [
        { "dataVenda": { $gte: ISODate("2019-01-01") } },
        { "dataVenda": { $lt: ISODate("2020-01-01") } },
      ]
  }},
  { $group: {
    _id: "$clienteId",
    totalCompras: { $sum: { $size: "$itens" } },
    valorTotal: { $sum: "$valorTotal" }
  } },
  { $lookup: {
      from: "clients",
      localField: "_id",
      foreignField: "clienteId",
      as: "client_info"
  } },
  { $project: {
    _id: 0,
    totalCompras: 1,
    valorTotal: 1,
    cliente: "$client_info.nome",
    uf: "$client_info.endereco.uf"
  } },
  { $unwind: "$cliente" },
  { $unwind: "$uf" },
  { $group: {
    _id: "$uf",
    totalVendas: { $sum: "$totalCompras" },
    mediaVendas: { $avg: "$valorTotal" },
  }},
  { $project: {
    uf: "$_id",
    totalVendas: 1,
    mediaVendas: 1,
    _id: 0,
  } },
  { $sort: { uf: 1 } },
]).pretty();
```
