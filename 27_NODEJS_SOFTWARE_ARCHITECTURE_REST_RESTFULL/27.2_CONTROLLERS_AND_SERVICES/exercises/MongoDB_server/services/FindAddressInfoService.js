import api from '../api/index.js';
import Address from '../database/models/Address.js';
import SearchLog from '../database/models/SearchLog.js';
import AppError from '../errors/AppError.js';

class FindAddressInfoService {
  constructor() {
    this.addressModel = new Address();
    this.searchModel = new SearchLog();
  }

  async execute(cep) {
    let addressInfo = await this.addressModel.find(cep);

    if (!addressInfo) {
      const { data: apiAddressInfo } = await api.get(`/${cep}`);

      if (Array.isArray(apiAddressInfo)) {
        throw new AppError('CEP info not found', 404);
      }

      addressInfo = await this.addressModel.create(apiAddressInfo);
    }

    await this.searchModel.registerLog(addressInfo);

    return addressInfo;
  }
}

export default FindAddressInfoService;
