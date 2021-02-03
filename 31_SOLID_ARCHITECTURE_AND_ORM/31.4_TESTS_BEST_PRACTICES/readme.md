# 31.4 - TESTS: BEST PRACTICES

On this module we basically revised what was previously covered on tests [here](https://github.com/fabiosenracorrea/Trybe/tree/master/10_JEST_TESTS) and [here](https://github.com/fabiosenracorrea/Trybe/tree/master/15_REACT_TESTING_LIBRARY).

To ensure tests are well written and working as intended, we can follow the AAA (triple A):

- **Arrange**: Make sure the environment is set for your tests to run. Any mock or fake data to ensure each code is isolated from their external dependencies (e.g. API or DB call) should be done here.
- **Act**: Create the test and the steps you want to check.
- **Assert**: Assert the results and make sure they make sense.

Don't be afraid of *spying* or *mocking* any function/method/implementation you might need to make sure your code is completely isolated.

## Test Folder Organization

As long as it makes sense for the team, this can be manipulated. There's people that create a `__tests__` folder, others would prefer to have the tests in the same place as whats being tested is:

```
└── src
│   └── User
│   │   └── controllers
│   │   │   ├── UserController.js
│   │   │   └── UserController.test.js
```

As long as you don't create a *FileSystem Hell*, it should be ok.

## Exercises

On this module we have 1 batch of exercises. You can check them out below:

* [Exercises](./exercises)

----

#### Comments

It's idealistic to think every code in the future will be properly tested. The amount of code in production right now that has little to no test coverage is huge. Tests, and specifically Unitary Tests, are a way to ensure our code performs exactly like we wanted to, and, once that performance change, if our final goal is still in reach, that is, our output remains as expected, give the same input as before.

If you can, implement as much testing as possible. I'm sure it will be worth the time.

###### Feedback

As always, any feedback or suggestion is welcomed.

