## 15.1 - React Testing Library - Mocking

### What was covered here?

After understanding how to test components rendering and content being displayed on screen, it's time to learn how we'd test for correct API requests and displays

For that, we'll make use of **mocking**, a concept of hijacking a function's role and forcing a return on it. We have to be careful, tho: We must mock the normal structure the function would normally return when making the correct API request, otherwise we're testing for something that won't happen.

### Exercises on this lesson

## Exercise 1

There's a single exercise on this lesson, related to a rather basic 'digimon' application you can check out on the link below. The exercise has a readme explaining what should be done, which is basically write tests for the whole application (getting to 100% test coverage) and then using [stryker](https://github.com/stryker-mutator/stryker/tree/master/packages/core#readme)'s tool to test our tests and see if they are correctly implemented.

Solution [here](./exercise-digimon-finders)

#### Comments

Having a way of consistently testing API-dependant components without having to rely on API requests is awesome. Aside from the fact that you could overload or waste token calls to external API's, it's an unnecessary dependency on our tests when it's possible to mock the API's behavior without actually connecting with it. It takes our testing to the next level!

###### Feedback

As always, any feedback or suggestion is welcomed.
