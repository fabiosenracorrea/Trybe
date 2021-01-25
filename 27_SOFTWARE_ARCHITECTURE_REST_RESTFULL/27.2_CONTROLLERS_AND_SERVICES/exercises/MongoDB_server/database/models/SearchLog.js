import connection from '../index.js';

class SearchLog {
  async registerLog({ uf, cidade }) {
    const db = await connection();

    await db.collection('cities_log').insertOne({
      cidade,
      searchDate: new Date(),
    });

    await db.collection('ufs_log').insertOne({
      uf,
      searchDate: new Date(),
    });
  }

  async getCityTotals(cidade) {
    const db = await connection();

    const cityWithoutCaps = new RegExp(cidade, 'i');

    const cityTotals = await db.collection('cities_log').aggregate([
      { $match: { cidade: { $regex: cityWithoutCaps } } },
      { $group: { _id: null, quantidade: { $sum: 1 } } },
      { $project: {
        _id: 0,
        cidade,
        quantidade: 1,
      } }
    ]).toArray();

    return cityTotals;
  }

  async getUFTotals(uf) {
    const db = await connection();

    const ufWithoutCaps = new RegExp(uf, 'i');

    const ufTotals = await db.collection('ufs_log').aggregate([
      { $match: { uf: { $regex: ufWithoutCaps } } },
      { $group: { _id: null, quantidade: { $sum: 1 } } },
      { $project: {
        _id: 0,
        uf,
        quantidade: 1,
      } }
    ]).toArray();

    return ufTotals;
  }
}

export default SearchLog;
