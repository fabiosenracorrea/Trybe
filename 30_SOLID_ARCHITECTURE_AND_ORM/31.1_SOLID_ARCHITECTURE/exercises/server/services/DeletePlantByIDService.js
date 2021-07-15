import AppError from "../errors/AppError.js";

class DeletePlantByIDService {
  constructor(plantModel) {
    this.plantModel = plantModel;
  }

  async execute(plantID) {
    const plant = await this.plantModel.findByID(plantID);

    if (!plant) {
      throw new AppError('Plant not found', 404);
    }


    await this.plantModel.delete(plantID);
  }
}

export default DeletePlantByIDService;
