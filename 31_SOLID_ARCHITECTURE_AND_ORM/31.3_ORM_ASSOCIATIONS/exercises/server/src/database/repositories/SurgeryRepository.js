const { Patient, Surgery } = require('../models');

class SurgeryRepository {
  constructor() {
    this.model = Surgery;
  }

  async listAllByDoctor(doctor) {
    const patients = await this.model.findAll({
      where: { doctor },
      include: { model: Patient, as: 'patients' },
    });

    return patients;
  }
}

module.exports = SurgeryRepository;
