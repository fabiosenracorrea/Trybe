class ListAllPatientsWithSurgeriesService {
  constructor(patientRepository) {
    this.repository = patientRepository;
  }

  async execute({ excludeDoctors }) {
    let patients;

    if (excludeDoctors) {
      patients = await this.repository.listWithSurgeriesNoDoctors();
    } else {
      patients = await this.repository.listWithSurgeries();
    }

    return patients;
  }
}

module.exports = ListAllPatientsWithSurgeriesService;
