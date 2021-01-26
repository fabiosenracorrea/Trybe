import connection from '../index.js';

class Address {
  async create(cepInfo) {
    const { cep, uf, bairro, logradouro, cidade } = cepInfo;

    const db = await connection();

    const [cepAlreadyCached] = await db.collection('address').find(
      { cep }
    ).toArray();

    if (cepAlreadyCached) {
      throw new Error();
    }

    const queryInfo = await db.collection('address').insertOne({
      cep,
      uf,
      bairro,
      logradouro,
      cidade,
      cachedAt: new Date(),
    });

    const [newAddressData] = queryInfo.ops;

    return newAddressData;
  }

  async find(cep) {
    const db = await connection();

    const [cepData] = await db.collection('address').find({
      cep,
    }).toArray();

    return cepData;
  }
}

export default Address;
