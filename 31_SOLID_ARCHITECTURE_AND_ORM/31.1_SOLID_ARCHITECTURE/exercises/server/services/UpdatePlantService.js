import AppError from "../errors/AppError.js";

class FindPlantByIDService {
  constructor(plantModel) {
    this.plantModel = plantModel;
  }

  async execute(newPlantInfo) {
    const plant = await this.plantModel.findByID(newPlantInfo.id);

    if (!plant) {
      throw new AppError('Plant not found', 404);
    }

    const { needsSun, origin, size } = newPlantInfo;

    const waterFrequency = needsSun ? size *  0.77 + (origin === 'Brazil' ? 8 : 7)
      : (size / 2) *  1.33 + (origin === 'Brazil' ? 8 : 7)

    const toUpdatePlantInfo = {
      ...newPlantInfo,
      specialCare: {
        waterFrequency,
        ...newPlantInfo.specialCare,
      },
    };

    await this.plantModel.update(toUpdatePlantInfo)

    return toUpdatePlantInfo;
  }
}

export default FindPlantByIDService;
