const AppError = require('../errors/AppError');

class ListAllSurgeriesByDoctor {
  constructor(surgeryRepository) {
    this.surgeryRepository = surgeryRepository;
  }

  async execute(doctorName) {
    const surgeries = await this.surgeryRepository.listAllByDoctor(doctorName);

    return surgeries;
  }
}

module.exports = ListAllSurgeriesByDoctor;
