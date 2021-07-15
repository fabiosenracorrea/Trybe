class ListAllPatientsWithPlanWithPlan {
  constructor(patientRepository) {
    this.repository = patientRepository;
  }

  async execute() {
    const patients = await this.repository.listWithPlan();

    return patients;
  }
}

module.exports = ListAllPatientsWithPlanWithPlan;
