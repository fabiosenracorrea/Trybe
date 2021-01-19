db.voos.findOne(
  { $and: [
    { litrosCombustivel: { $lte: 600 } },
    { "empresa.nome": { $nin: ["GOL", "AZUL"] } },
  ] },
  { _id: false, vooId: true, litrosCombustivel: true, "empresa.nome": true },
);
