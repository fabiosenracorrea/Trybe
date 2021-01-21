## Exercises - $lookup

Usando os dados:

```javascript
db.clients.insertMany([
  { name: "Dave America", State: "Florida" },
  { name: "Ned Flanders", State: "Alasca" },
  { name: "Mark Zuck", State: "Texas" },
  { name: "Edna Krabappel", State: "Montana" },
  { name: "Arnold Schuz", State: "California" },
  { name: "Lisa Simpson", State: "Florida" },
  { name: "Barney Gumble", State: "Texas" },
  { name: "Homer Simpson", State: "Florida" },
]);
```

E:

```javascript
db.transactions.insertMany([
  { value: 5900, from: "Dave America", to: "Ned Flanders", bank: 'International' },
  { value: 1000, from: "Mark Zuck", to: "Edna Krabappel", bank: 'FloridaBank' },
  { value: 209, from: "Lisa Simpson", to: "Dave America", bank: 'bankOfAmerica' },
  { value: 10800, from: "Arnold Schuz", to: "Mark Zuck", bank: 'JPMorgan' },
  { value: 850, from: "Barney Gumble", to: "Lisa Simpson", bank: 'Citigroup' },
  { value: 76000, from: "Ned Flanders", to: "Edna Krabappel", bank: 'JPMorgan' },
  { value: 1280, from: "Dave America", to: "Homer Simpson", bank: 'Citigroup' },
  { value: 7000, from: "Arnold Schuz", to: "Ned Flanders", bank: 'International' },
  { value: 59020, from: "Homer Simpson", to: "Lisa Simpson", bank: 'International' },
  { value: 100, from: "Mark Zuck", to: "Barney Gumble", bank: 'floridaBank' },
]);
```

1. Selecione todos os clientes com as suas respectivas transações feitas;

```javascript
db.clients.aggregate([
  {
    $lookup: {
      from: "transactions",
      let: { c_name: "$name", c_id: "$_id" },
      pipeline: [
        {
          $match: {
            $expr: {
                $eq: [ "$from",  "$$c_name" ],
            }
          }
        },
        { $project: { from: 0, _id: 0 } }
      ],
      as: "transactions"
    }
  }
]);
```

2. Selecione quatro clientes com as suas respectivas transações recebidas;

```javascript
db.clients.aggregate([
  {
    $lookup: {
      from: "transactions",
      let: { c_name: "$name", c_id: "$_id" },
      pipeline: [
        {
          $match: {
            $expr: {
                $eq: [ "$to",  "$$c_name" ],
            }
          }
        },
        { $project: { to: 0, _id: 0 } }
      ],
      as: "transactions"
    }
  },
  { $limit: 4 }
]);
```

3. Selecione todos os cliente do estado da "Florida" e suas respectivas transações recebidas.

```javascript
db.clients.aggregate([
  { $match: { State: "Florida" } },
  {
    $lookup: {
      from: "transactions",
      let: { c_name: "$name", c_id: "$_id" },
      pipeline: [
        {
          $match: {
            $expr: {
                $eq: [ "$to",  "$$c_name" ],
            }
          }
        },
        { $project: { to: 0, _id: 0 } }
      ],
      as: "transactions"
    }
  },
]);
```
