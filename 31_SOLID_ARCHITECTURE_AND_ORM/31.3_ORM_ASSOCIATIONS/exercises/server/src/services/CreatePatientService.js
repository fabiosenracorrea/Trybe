const AppError = require('../errors/AppError');

class CreatePatientService {
  constructor(patientRepository, planRepository) {
    this.patientRepository = patientRepository;
    this.planRepository = planRepository;
  }

  async execute({ fullname, plan_id }) {
    const numericRegex = /^\d*$/
    const idIsNumeric = numericRegex.test(plan_id);

    if (!idIsNumeric) {
      throw new AppError('Incorrect plan_id provided.');
    }

    const numberedPlanID = Number(plan_id);

    const planWithProvidedIDExists = await this.planRepository.findByID(numberedPlanID);

    if (!planWithProvidedIDExists) {
      throw new AppError('Plan not found', 404);
    }

    const newPatientInfo = {
      fullname,
      plan_id: numberedPlanID,
    }

    const newPatient = await this.patientRepository.createPatient(newPatientInfo);

    return newPatient;
  }
}

module.exports = CreatePatientService;
