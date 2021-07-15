const { Plan } = require('../models')

class PatientRepository {
  constructor() {
    this.model = Plan;
  }

  async findByID(id) {
    const plan = await this.model.findByPk(id);

    return plan;
  }
}

module.exports = PatientRepository;
