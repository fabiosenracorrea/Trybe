import AppError from '../errors/AppError.js';
import FindAddressInfoService from '../services/FindAddressInfoService.js';
import validateCEP from '../utils/validateCEP.js';

class AddressController {
  async find(request, response) {
    const { cep } = request.query;

    if (!cep) {
      throw new AppError('Please provide a CEP')
    }

    const curatedCEP = validateCEP(cep);

    const findAddressInfoService = new FindAddressInfoService();

    const addressInfo = await findAddressInfoService.execute(curatedCEP);

    return response.status(200).json({ addressInfo });
  }
}

export default AddressController;
