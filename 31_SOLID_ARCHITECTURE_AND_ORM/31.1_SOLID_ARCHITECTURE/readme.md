# 31.1 - SOLID ARCHITECTURE

There are a lot of different ways of designing good apis and code in general. To help with that, some architecture guidelines were created and disseminated throughout the years. One of the most famous is SOLID.

SOLID is an acronym for 5 different design patters you code should aim to follow:

- **S**ingle responsibility principle
- **O**pen/Closed principle
- **L**iskov substitution principle
- **I**nterface segregation principle
- **D**ependency inversion principle

As of this modules content, it will focus on the **S**, **O**, and **D** for now. Later on the course this architecture will be revised with all 5 guidelines.

## Single Responsibility Principle

Each individual class/function on the application should only do one thing.

## Open/Closed Principle

A function should be closed for modifications but open for extensions.

Take a look at this example:

```javascript
const SCHOOL_DATA = {
  Standard: {
    approvalGrade: 0.7
  },
  Hogwarts: {
    approvalGrade: 0.8
  }
};

// ...

const approvedStudents = ({ school, disciplines }) => {
  const { approvalGrade } = SCHOOL_DATA[school];

  return disciplines.every(({ grade }) => grade >= approvalGrade);
};

// ...
```

If we were to add one other school to the mix, it could easily be done outside of our function, while also extending it.

## Dependency Inversion Principle

This means our code should not depend on any other implementation to continue working.

For instance, let's say you have a service on your server that's it's sole purpose is to create a new user when a registration route is called. This service would obviously need to perform an action on the database. But it does not need to know which database you are using. By simply passing the model/repository as a parameter to the service, we can, if we want, change our entire database and the service will continue to work, provided the same method names are kept in place.

A simple example of this would be the service below:

```javascript
class CreatePlantService {
  constructor(plantModel) {
    this.plantModel = plantModel;
  }

  async execute(newPlantInfo) {
    const { needsSun, origin, size } = newPlantInfo;

    const waterFrequency = needsSun ? size *  0.77 + (origin === 'Brazil' ? 8 : 7)
      : (size / 2) *  1.33 + (origin === 'Brazil' ? 8 : 7)

    const plantToCreate = {
      ...newPlantInfo,
      specialCare: {
        waterFrequency,
        ...newPlantInfo.specialCare,
      },
    };

    const newPlant = await this.plantModel.create(plantToCreate)

    return newPlant;
  }
}

export default CreatePlantService;
```

This service handles a creation of a new plant in our database. Which database is it? How does the create method works? Doesn't matter to our service. We could easily be using either a postgres or a mongoDB on our model, and it would not affect our service.

## Exercises

On this module we have 1 batches of exercises, where some boiler plate code NOT in SOLID is transformed into a CRUD server applying most of it's principles. You can check them out below:

* [Implementing SOLID](./exercises)

----

#### Comments

SOLID is definitely one of the most used architecture out there. You may encounter some applications that use some, but not all, of the principles, and that's totally fine. Understanding and knowing what which principle states, however, should be widely incentivized and practiced.

###### Feedback

As always, any feedback or suggestion is welcomed.

