db.voos.findOne(
  { litrosCombustivel: { $lte: 1000 } },
  { _id: false, vooId: true, litrosCombustivel: true },
);
