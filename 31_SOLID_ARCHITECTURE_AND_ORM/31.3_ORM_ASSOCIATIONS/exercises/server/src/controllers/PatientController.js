const PatientRepository = require('../database/repositories/PatientRepository');
const PlanRepository = require('../database/repositories/PlanRepository');
const ListAllPatientsWithPlanService = require('../services/ListAllPatientsWithPlan');
const ListAllPatientsWithSurgeriesService = require('../services/ListAllPatientsWithSurgeries');
const ListAllPatientsByPlanIDService = require('../services/ListAllPatientsByPlanID');
const CreatePatientService = require('../services/CreatePatientService');
const AppError = require('../errors/AppError');

class PatientController {
  async listWithPlans(_, response) {
    const patientRepository = new PatientRepository();
    const listAllPatientsWithPlan = new ListAllPatientsWithPlanService(patientRepository);

    const patients = await listAllPatientsWithPlan.execute();

    return response.status(200).json(patients);
  }

  async listWithSurgeries(request, response) {
    const { excludeDoctors } = request.query;

    const patientRepository = new PatientRepository();
    const listAllPatientsWithSurgeries = new ListAllPatientsWithSurgeriesService(patientRepository);

    const patients = await listAllPatientsWithSurgeries.execute({ excludeDoctors: !!excludeDoctors });

    return response.status(200).json(patients);
  }

  async findByPlanID(request, response) {
    const { id } = request.params;

    const patientRepository = new PatientRepository();
    const listAllPatientsByPlan = new ListAllPatientsByPlanIDService(patientRepository);

    const patients = await listAllPatientsByPlan.execute(id);

    return response.status(200).json(patients);
  }

  async create(request, response) {
    const { fullname, plan_id } = request.body;

    if (!fullname || !plan_id) {
      throw new AppError('Missing information');
    }

    const patientRepository = new PatientRepository();
    const planRepository = new PlanRepository();
    const createPatient = new CreatePatientService(patientRepository, planRepository);

    const newPatientInfo = { fullname, plan_id }

    const newPatient = await createPatient.execute(newPatientInfo);

    return response.status(201).json(newPatient);
  }
}

module.exports = PatientController;
