class ListPlantsService {
  constructor(plantModel) {
    this.plantModel = plantModel;
  }

  async execute() {
    const plants = await this.plantModel.list();

    return plants;
  }
}

export default ListPlantsService;
