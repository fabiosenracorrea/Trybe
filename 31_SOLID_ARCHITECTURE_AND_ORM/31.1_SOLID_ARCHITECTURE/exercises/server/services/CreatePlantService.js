class CreatePlantService {
  constructor(plantModel) {
    this.plantModel = plantModel;
  }

  async execute(newPlantInfo) {
    const { needsSun, origin, size } = newPlantInfo;

    const waterFrequency = needsSun ? size *  0.77 + (origin === 'Brazil' ? 8 : 7)
      : (size / 2) *  1.33 + (origin === 'Brazil' ? 8 : 7)

    const plantToCreate = {
      ...newPlantInfo,
      specialCare: {
        waterFrequency,
        ...newPlantInfo.specialCare,
      },
    };

    const newPlant = await this.plantModel.create(plantToCreate)

    return newPlant;
  }
}

export default CreatePlantService;
