const SurgeryRepository = require('../database/repositories/SurgeryRepository');
const ListAllSurgeriesByDoctorService = require('../services/ListAllSurgeriesByDoctor');

class SurgeryController {
  async listWithPlans(request, response) {
    const { doctorName } = request.params;

    const surgeryRepository = new SurgeryRepository();
    const listAllSurgeriesByDoctorService = new ListAllSurgeriesByDoctorService(surgeryRepository);

    const surgeries = await listAllSurgeriesByDoctorService.execute(doctorName);

    return response.status(200).json(surgeries);
  }
}

module.exports = SurgeryController;
