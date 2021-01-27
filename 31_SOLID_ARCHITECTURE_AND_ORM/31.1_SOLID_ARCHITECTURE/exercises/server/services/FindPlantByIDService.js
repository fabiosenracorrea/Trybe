import AppError from "../errors/AppError.js";

class FindPlantByIDService {
  constructor(plantModel) {
    this.plantModel = plantModel;
  }

  async execute(plantID) {
    const plant = await this.plantModel.findByID(plantID);

    if (!plant) {
      throw new AppError('Plant not found', 404);
    }

    return plant;
  }
}

export default FindPlantByIDService;
