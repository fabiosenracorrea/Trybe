import AppError from '../errors/AppError.js';
import GetSearchStatisticsService from '../services/GetSearchStatisticsService.js';

class StatisticController {
  async show(request, response) {
    const { uf, cidade } = request.query;

    if ((!uf && !cidade) || (uf && cidade)) {
      throw new AppError('Please provide only one UF OR City')
    }

    const getSearchStatisticsService = new GetSearchStatisticsService();

    const searchStatistic = await getSearchStatisticsService.execute({ uf, cidade });

    return response.status(200).json(searchStatistic);
  }
}

export default StatisticController;
