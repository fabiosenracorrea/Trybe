db.voos.find(
  {
    $and: [
      { "empresa.nome": "GOL" },
      { ano: 2017 },
    ],
  },
  {
    vooId: true,
    ano: true,
    mes: true,
    "empresa.nome": true,
    "aeroportoOrigem.nome": true,
    "aeroportoDestino.nome": true,
    _id: false,
  },
).limit(10);
