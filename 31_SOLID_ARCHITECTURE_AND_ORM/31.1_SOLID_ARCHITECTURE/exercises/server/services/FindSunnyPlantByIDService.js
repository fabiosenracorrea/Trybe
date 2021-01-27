import AppError from "../errors/AppError.js";

class FindSunnyPlantByIDService {
  constructor(plantModel) {
    this.plantModel = plantModel;
  }

  async execute(plantID) {
    const plant = await this.plantModel.findByID(plantID);

    if (!plant || !plant.needsSun) {
      throw new AppError('Sunny plant with that id not found', 404);
    }

    return plant;
  }
}

export default FindSunnyPlantByIDService;
