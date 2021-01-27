import Plants from '../models/Plants.js';
import ListPlantsService from '../services/ListPlantsService.js';
import FindPlantByIDService from '../services/FindPlantByIDService.js';
import UpdatePlantService from '../services/UpdatePlantService.js';
import DeletePlantByIDService from '../services/DeletePlantByIDService.js';
import FindSunnyPlantByIDService from '../services/FindSunnyPlantByIDService.js';
import CreatePlantService from '../services/CreatePlantService.js';
import AppError from '../errors/AppError.js';

const plantsModel = new Plants();

class PlantsController {
  async show(request, response) {
    const listPlantsService = new ListPlantsService(plantsModel);

    const plants = await listPlantsService.execute();

    return response.status(200).json({ plants });
  }

  async find(request, response) {
    const { id } = request.params;

    const findPlantByIDService = new FindPlantByIDService(plantsModel);

    const plant = await findPlantByIDService.execute(id);

    return response.status(200).json({ plant });
  }

  async update(request, response) {
    const { id } = request.params;
    const { breed, needsSun, origin, specialCare, size } = request.body;

    if (!breed || !origin || !specialCare || !size) {
      throw new AppError('Wrong info provided');
    }

    const newPlantInfo = {
      breed,
      id,
      needsSun,
      origin,
      specialCare,
      size,
    }

    const updatePlantService = new UpdatePlantService(plantsModel);

    const plant = await updatePlantService.execute(newPlantInfo);

    return response.status(201).json({ plant });
  }

  async delete(request, response) {
    const { id } = request.params;

    const deletePlantByIDService = new DeletePlantByIDService(plantsModel);

    await deletePlantByIDService.execute(id);

    return response.status(204).json({ ok: true });
  }

  async filter(request, response) {
    const { id } = request.params;

    const findSunnyPlantByIDService = new FindSunnyPlantByIDService(plantsModel);

    const plant = await findSunnyPlantByIDService.execute(id);

    return response.status(200).json({ plant });
  }

  async create(request, response) {
    const { breed, needsSun, origin, specialCare, size } = request.body;

    if (!breed || !origin || !specialCare || !size) {
      throw new AppError('Wrong info provided');
    }

    const newPlantInfo = {
      breed,
      needsSun,
      origin,
      specialCare,
      size,
    }

    const createPlantService = new CreatePlantService(plantsModel);

    const plant = await createPlantService.execute(newPlantInfo);

    return response.status(201).json({ plant });
  }
}

export default PlantsController;
