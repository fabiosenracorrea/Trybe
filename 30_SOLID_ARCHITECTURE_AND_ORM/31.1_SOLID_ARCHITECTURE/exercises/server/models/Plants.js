const defaultPlants = [
  {
    id: 1,
    breed: "Bromelia",
    needsSun: false,
    origin: "Argentina",
    size: 102,
    specialCare: {
      waterFrequency: 3,
    },
  },
  {
    id: 2,
    breed: "Orquidea",
    size: 99,
    needsSun: false,
    origin: "Brazil",
  },
]

class Plants {
  constructor() {
    this.plants = defaultPlants;
    this.nextID = 3;
  }

  async list() {
    return this.plants;
  }

  async findByID(plantID) {
    return this.plants.find(plant => plant.id == plantID);
  }

  async delete(plantID) {
    this.plants = this.plants.filter(plant => plant.id != plantID);

    return true;
  }

  async create(plantInfo) {
    const newPlant = { ...plantInfo, id: this.nextID }

    this.plants.push(newPlant);

    this.nextID = this.nextID + 1;

    return newPlant;
  }

  async update(newPlantInfo) {
    this.plants = this.plants.map(plant => {
      if (plant.id != newPlantInfo.id) {
        return plant;
      }

      return newPlantInfo;
    })
  }
}

export default Plants;
