# Exercises - Aggregation - $group

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

Selecione todos os bancos;

```javascript
db.transactions.aggregate([
  { $group: {
    _id: null,
    banks: { $addToSet: "$bank" }
  } }
]).pretty();
```

Selecione o valor total das transações em cada banco e quantas são;

```javascript
db.transactions.aggregate([
  { $group: {
    _id: "$bank",
    totalValue: { $sum: "$value" },
    numberOfTransactions: { $sum: 1 }
  } }
]).pretty();
```

Selecione o valor total de transações;

```javascript
db.transactions.aggregate([
  { $group: {
    _id: null,
    totalValue: { $sum: "$value" }
  } }
]).pretty();
```

Selecione os bancos que têm o valor total de transações maior que 1000.

```javascript
db.transactions.aggregate([
  { $group: {
    _id: "$bank",
    totalValue: { $sum: "$value" },
  } },
  { $match: { totalValue: { $gt: 1000 } } }
]).pretty();
```
