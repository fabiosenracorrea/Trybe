## Bonus exercises

Para todas as alterações realizadas, você deve sempre atualizar ou adicionar o campo lastUpdate , que armazena a data da última alteração com o tipo timestamp . Os exercícios devem ser realizados na ordem.

**Exercício 14** : Remova o campo class dos documentos que possuem esse campo com o valor unknown .

```javascript
db.xmen.updateMany(
  { "class": "unknown" },
  {
    $currentDate: { "lastUpdate": { $type: "timestamp" } },
    $unset: { "class": "" }
  }
);
```

**Exercício 15** : Produza uma query que renomeie os campos de name para hero_name , e de true_name para full_name ; adicione o campo power com valor 100, em todos os documentos.

```javascript
db.xmen.updateMany(
  {},
  {
    $currentDate: { "lastUpdate": { $type: "timestamp" } },
    $rename: { "name": "hero_name", "true_name": "full_name" },
    $set: { "power": 100 }
  }
);
```

**Exercício 16** : Produza uma query onde os mutantes class ômega ou gama passam a ter seu poder de 500 somente se seu poder for menor que 500 .

```javascript
db.xmen.updateMany(
  { "class": { $in: ["omega", "gama"] } },
  {
    $currentDate: { "lastUpdate": { $type: "timestamp" } },
    $max: { "power": 500 }
  }
);
```

**Exercício 17** : Produza uma query onde os mutantes class gama passam a ter seu poder de 300 somente se seu poder for maior que 300 .

```javascript
db.xmen.updateMany(
  { "class":  "gama" },
  {
    $currentDate: { "lastUpdate": { $type: "timestamp" } },
    $min: { "power": 300 }
  }
);
```

**Exercício 18** : Decremente em 100 o poder dos mutantes não contêm a propriedade class .

```javascript
db.xmen.updateMany(
  { "class": { $exists: false } },
  {
    $currentDate: { "lastUpdate": { $type: "timestamp" } },
    $inc: { "power": -100 }
  }
);
```

**Exercício 19** : Em apenas uma query adicione o campo area com o seguinte array como valor: [ "Students Room" ] a todos os mutantes que são Senior Staff que tenham poder acima de 100 e para todos os Junior Staff com poder acima de 200.

```javascript
db.xmen.updateMany(
  { $or: [
    { $and: [{ "occupation": "Junior Staff" }, { "power": { $gt: 200 } }] },
    { $and: [{ "occupation": "Senior Staff" }, { "power": { $gt: 100 } }] },
  ] },
  {
    $currentDate: { "lastUpdate": { $type: "timestamp" } },
    $set: { "area": ["Students Room"] }
  }
);
```

**Exercício 20** : Em apenas uma query, adicione o campo áreas com [ "outside" ] a todos os Junior Staff que não tenham o campo area definido.

```javascript
db.xmen.updateMany(
  { $and: [
    { "occupation": "Junior Staff" },
    { "area": { $exists: false } }
  ] },
  {
    $currentDate: { "lastUpdate": { $type: "timestamp" } },
    $set: { "area": ["Outside"] }
  }
);
```
