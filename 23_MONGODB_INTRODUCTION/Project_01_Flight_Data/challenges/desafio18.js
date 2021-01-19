db.voos.findOne(
  { "passageiros.pagos": { $gt: 7000 } },
  { _id: false, vooId: true, ano: true, mes: true },
);
