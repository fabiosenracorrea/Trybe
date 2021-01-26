import SearchLog from '../database/models/SearchLog.js';
import AppError from '../errors/AppError.js';

class GetSearchStatisticsService {
  constructor() {
    this.searchModel = new SearchLog();
  }

  async execute({ uf, cidade }) {
    if (uf && uf.length !== 2) {
      throw new AppError('Invalid UF provided.');
    }

    let desiredStatistic;

    if (cidade) {
      [desiredStatistic] = await this.searchModel.getCityTotals(cidade);
    } else {
      [desiredStatistic] = await this.searchModel.getUFTotals(uf);
    }

    if (!desiredStatistic) {
      desiredStatistic = {}
    }

    return desiredStatistic;
  }
}

export default GetSearchStatisticsService;
