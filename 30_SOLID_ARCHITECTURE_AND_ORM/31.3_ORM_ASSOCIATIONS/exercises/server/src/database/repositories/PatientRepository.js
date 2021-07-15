const { Patient, Plan, Surgery } = require('../models')

class PatientRepository {
  constructor() {
    this.model = Patient;
  }

  async listWithPlan() {
    const patients = await this.model.findAll({ include: { model: Plan, as: 'plan' } });

    return patients;
  }

  async listWithSurgeries() {
    const patients = await this.model.findAll(
      { include: { model: Surgery, as: 'surgeries', through: { attributes: [] } } },
    );

    return patients;
  }

  async listWithSurgeriesNoDoctors() {
    const patients = await this.model.findAll(
      { include: {
        model: Surgery,
        as: 'surgeries',
        attributes: { exclude: ['doctor'] },
        through: { attributes: [] },
      }},
    );

    return patients;
  }

  async filterByPlan(planID) {
    const patients = await this.model.findAll({ where: { plan_id: planID } });

    return patients;
  }

  async createPatient({ fullname, plan_id }) {
    const patientToCreate = {
      fullname,
      plan_id,
    }

    const newPatient = await this.model.create(patientToCreate);

    return newPatient;
  }
}

module.exports = PatientRepository;
