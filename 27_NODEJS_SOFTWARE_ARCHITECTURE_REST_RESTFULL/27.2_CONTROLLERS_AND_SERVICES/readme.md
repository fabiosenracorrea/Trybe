# 27.2 - CONTROLLERS AND SERVICES

After understanding what the model is for, it's time to check out the two other concepts of the MSC architecture:

* Controllers
* Services

## Controllers

The are responsible for dealing with the client's request and answer. It's here that you will put all functions relative to a specific route/model in your application.

It's important to note that **no application rules should be applied here**. You can, at maximum, validate the request data or transform it to the right type before passing it on to a service. But do not validate application-wide rules here.

Example of a controller that deals with a **Address** model on some application:

```javascript
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
```

Notice how we curate the ZIP code received before passing it to the service, but do not apply application rules anywhere.

To use this controller on a route, one would simply:

```javascript
// ...
const addressRoutes = express.Router();

const addressController = new AddressController();

addressRoutes.get('/address', addressController.find);

// ...
```

## Services

A service is where a specific functionality of your application will be executed. It's important to note that it's best to **only have one method on each service**. This method is generally named `execute`;

If we continue on the example above, let's take a look at our `FindAddressInfoService`:

```javascript
import api from '../api/index.js';
import Address from '../database/models/Address.js';
import SearchLog from '../database/models/SearchLog.js';
import AppError from '../errors/AppError.js';

class FindAddressInfoService {
  constructor() {
    this.addressModel = new Address();
    this.searchModel = new SearchLog();
  }

  async execute(cep) {
    let addressInfo = await this.addressModel.find(cep);

    if (!addressInfo) {
      const { data: apiAddressInfo } = await api.get(`/${cep}`);

      if (Array.isArray(apiAddressInfo)) {
        throw new AppError('CEP info not found', 404);
      }

      addressInfo = await this.addressModel.create(apiAddressInfo);
    }

    await this.searchModel.registerLog(addressInfo);

    return addressInfo;
  }
}

export default FindAddressInfoService;
```

It would be better if our models were *injected* here, but this implementation suffices for now.

Here we execute the action we want (in this case, to find info on a ZIP code), applying any logic needed. One can notice that the application itself uses it's database as a type of **cache** for the info wanted. If no cache is found, information will be requested on an external API and then saved accordingly.

The important thing to note here is that both the cache search and api call + save are important parts of the **rule** of our server, and therefore should be used inside the service handling that functionality.

## Application Organization

There are 2 main ways of organizing a modern MSC application:

* Model-based: divided based on your app models (User, Address...)
* Technical-based divided based on concepts (controllers, services, models...)

## Exercises

On this module we have 1 batches of exercises. You can check them out below:

* [MSC Exercise](./exercises)

----

#### Comments

Properly dividing your application into a chosen pattern should be one of the first things to be done when starting a new project. Every line of code added since then makes it harder and harder to achieve **separation of concerns**, which, to say the least, helps you with **code maintenance**.

###### Feedback

As always, any feedback or suggestion is welcomed.

