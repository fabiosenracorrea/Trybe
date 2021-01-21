## AGGREGATION PT 2 - Exercises

These exercises will continue to use Part I data. Check it out [here](../../25.1_AGGREGATION_P1/exercises/exerciseData)

**Exercício 1**: Utilize uma combinação das expressões aritméticas e adicione um campo chamado idade à coleção clientes

(1 dia é igual a 86400000 milissegundos)

```javascript
db.clients.aggregate([
  { $addFields: {
    idade: {
      $floor: { $divide: [{ $subtract: ["$$NOW", "$dataNascimento"] }, 365.25 * 86400000] }
    }
  }}
]).pretty();
```

**Exercício 2**: Utilizando o novo campo idade , conte quantos clientes têm entre 18 e 25 anos.

```javascript
db.clients.aggregate([
  { $addFields: {
    idade: {
      $floor: { $divide: [{ $subtract: ["$$NOW", "$dataNascimento"] }, 365 * 86400000] }
    }
  }},
  { $match: { $and: [
    { idade: { $gte: 18 } },
    { idade: { $lte: 25 } }
  ] } },
  { $count: "entre18e25" }
]).pretty();
```

**Exercício 3**: Adicione um estágio no pipeline que coloque as compras do cliente no campo compras .

```javascript
db.clients.aggregate([
  { $lookup: {
    from: "orders",
    localField: "clienteId",
    foreignField: "clienteId",
    as: "compras"
  } },
  { $project: {
    "compras._id": 0,
    "compras.clienteId": 0,
    "compras.status": 0,
  }}
]).pretty();
```

**Exercício 4**: Selecione TODOS os clientes que compraram entre Junho de 2019 e Março de 2020 .

```javascript
db.orders.aggregate([
  { $match: {
      $and: [
        { "dataVenda": { $gte: ISODate("2019-06-01") } },
        { "dataVenda": { $lt: ISODate("2020-04-01") } },
      ]
  }},
  { $group: {
    _id: "$clienteId",
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
    valorTotal: 1,
    cliente: "$client_info.nome",
  } },
  { $unwind: "$cliente" },
]).pretty();
```

**Exercício 5**: Confira o número de documentos retornados pelo pipeline com o método itcount().Até aqui, você deve ter 486 documentos sendo retornados.

```javascript
db.orders.aggregate([
  { $match: {
      $and: [
        { "dataVenda": { $gte: ISODate("2019-06-01") } },
        { "dataVenda": { $lt: ISODate("2020-04-01") } },
      ]
  }},
  { $group: {
    _id: "$clienteId",
    valorTotal: { $sum: "$valorTotal" },
    compras: { $sum: 1 }
  } },
  { $lookup: {
      from: "clients",
      localField: "_id",
      foreignField: "clienteId",
      as: "client_info"
  } },
  { $project: {
    _id: 0,
    valorTotal: 1,
    compras: 1,
    cliente: "$client_info.nome",
  } },
  { $unwind: "$cliente" },
  { $count: "cliente" }
]).pretty();
```

**Exercício 6**: Deixe apenas os top 10 clientes com mais compras nesse período.

```javascript
db.orders.aggregate([
  { $match: {
      $and: [
        { "dataVenda": { $gte: ISODate("2019-06-01") } },
        { "dataVenda": { $lt: ISODate("2020-04-01") } },
      ]
  }},
  { $group: {
    _id: "$clienteId",
    valorTotal: { $sum: "$valorTotal" },
    compras: { $sum: 1 }
  } },
  { $lookup: {
      from: "clients",
      localField: "_id",
      foreignField: "clienteId",
      as: "client_info"
  } },
  { $sort: { compras: -1 } },
  { $limit: 10 },
  { $project: {
    _id: 0,
    valorTotal: 1,
    compras: 1,
    cliente: "$client_info.nome",
  } },
  { $unwind: "$cliente" },
]).pretty();
```

**Exercício 7**: Para esses clientes, adicione um campo chamado valorComDesconto em todas as compras do período, aplicando 10% de desconto sobre o valor total da compra ( valorTotal ).

```javascript
db.orders.aggregate([
  { $match: {
      $and: [
        { "dataVenda": { $gte: ISODate("2019-06-01") } },
        { "dataVenda": { $lt: ISODate("2020-04-01") } },
      ]
  }},
  { $group: {
    _id: "$clienteId",
    valorTotal: { $sum: "$valorTotal" },
    compras: { $sum: 1 }
  } },
  { $lookup: {
      from: "clients",
      localField: "_id",
      foreignField: "clienteId",
      as: "client_info"
  } },
  { $sort: { compras: -1 } },
  { $limit: 10 },
  { $project: {
    _id: 0,
    valorTotal: 1,
    compras: 1,
    valorComDesconto: { $multiply: ["$valorTotal", 0.9] },
    cliente: "$client_info.nome",
  } },
  { $unwind: "$cliente" },
]).pretty();
```

**Exercício 8**: Ainda nesse pipeline, descubra os 5 estados com mais compras.

```javascript
db.orders.aggregate([
  { $match: {
      $and: [
        { "dataVenda": { $gte: ISODate("2019-06-01") } },
        { "dataVenda": { $lt: ISODate("2020-04-01") } },
      ]
  }},
  { $group: {
    _id: "$clienteId",
    valorTotal: { $sum: "$valorTotal" },
    compras: { $sum: 1 }
  } },
  { $lookup: {
      from: "clients",
      localField: "_id",
      foreignField: "clienteId",
      as: "client_info"
  } },
  { $sort: { compras: -1 } },
  { $limit: 10 },
  { $project: {
    _id: 0,
    valorTotal: 1,
    compras: 1,
    valorComDesconto: { $multiply: ["$valorTotal", 0.9] },
    cliente: "$client_info.nome",
    estado: "$client_info.endereco.uf",
  } },
  { $unwind: "$cliente" },
  { $unwind: "$estado" },
  { $group: {
    _id: "$estado",
    compras: { $sum: "$compras" }
  }},
  { $sort: { compras: -1 } },
  { $limit: 5 }
]).pretty();
```

**Exercício 9**: Descubra o cliente que mais consumiu QUEIJO PRATO . Retorne um documento com a seguinte estrutura:

```json
{
  "nomeCliente": "NOME",
  "uf": "UF DO CLIENTE",
  "totalConsumido": 100
}
```

```javascript
db.orders.aggregate([
  { $unwind: "$itens" },
  { $match: {
      "itens.nome": "QUEIJO PRATO"
  }},
  { $group: {
    _id: "$clienteId",
    totalConsumido: { $sum: "$itens.quantidade" }
  }},
  { $sort: { totalConsumido: -1 } },
  { $limit: 1 },
  { $lookup: {
      from: "clients",
      localField: "_id",
      foreignField: "clienteId",
      as: "client_info"
  } },
  { $unwind: "$client_info" },
  { $project: {
      nomeCliente: "$client_info.nome",
      uf: "$client_info.endereco.uf",
      totalConsumido: 1,
      _id: 0,
  }}
]).pretty();
```

**Exercício 10**: Selecione todas as vendas do mês de Março de 2020 , com status EM SEPARACAO . Acrescente um campo chamado dataEntregaPrevista com valor igual a três dias após a data da venda. Retorne apenas os campos clienteId , dataVenda e dataEntregaPrevista .

```javascript
db.orders.aggregate([
  { $match: { $and: [
    { dataVenda: { $gte: ISODate("2020-03-01") } },
    { dataVenda: { $lt: ISODate("2020-04-01") } },
    { status: "EM SEPARACAO" }
  ]}},
  { $project: {
    dataEntregaPrevista: { $add: ["$dataVenda", 3 * 86400000] },
    dataVenda: 1,
    clienteId: 1,
    _id: 0,
  }}
]).pretty();
```
