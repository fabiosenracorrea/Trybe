db.produtos.updateMany(
  { valoresNutricionais: {
    $elemMatch: { $and: [
      { tipo: "sódio" },
      { percentual: { $gt: 20 } },
      { percentual: { $lt: 40 } },
    ] },
  } },
  { $push: {
    tags:
      {
        $each: ["contém sódio"],
      },
  } },
);

db.produtos.find(
  {},
  { nome: 1, tags: 1, _id: 0 },
);
