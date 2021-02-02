const AppError = require('../errors/AppError');

class ListAllPatientsByPlanID {
  constructor(patientRepository) {
    this.repository = patientRepository;
  }

  async execute(id) {
    const numericRegex = /^\d*$/
    const idIsNumeric = numericRegex.test(id);

    if (!idIsNumeric) {
      throw new AppError('Incorrect ID provided.')
    }

    const numberedID = Number(id);

    const patients = await this.repository.filterByPlan(numberedID);

    return patients;
  }
}

module.exports = ListAllPatientsByPlanID;
