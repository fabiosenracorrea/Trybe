## Module 15 - React Testing Library (RTL)

This directory covers Trybe's 15th module.

## What was covered here?

We've seen [basic assertion tests](../07_JAVASCRIPT_ES6/7.3_Test_Assertions) and [Jest](../10_JEST_TESTS), a more robust and actually usable testing library. But these tests have covered, so far, normal Javascript functions. If you have a function

```javascript
function sum(a, b) {
  return a + b;
}
```

It's pretty clear what needs to be done to test it, right?

But how'd you test a *React Component*? It's Javascript, or rather, **JSX**, but it's also so much more.

And because of this we need (and have!) different libraries that factory in the fact we have rendering, User Events, screen navigation, and so much more. There's two main libraries today that are widely used across the world to test React:

* [Enzyme](https://github.com/enzymejs/enzyme)
* [React Testing Library](https://github.com/testing-library/react-testing-library)

On this module, we are going to cover *React Testing Library*, which is the officially recommended library.

Here you will find:

* [Getting Started](./15.1_GETTING_STARTED)
* [Mocking & Testing](./15.2_MOCKING_AND_TESTING)
* React Router DOM Testing - 15.3*
* [Project 01 - React Testing](./Project_01_REACT_TESTING)

Because of a schedule change, the exercise and content on module 15.3 will be covered into the whole module's project.

To check each part of the module, simply click on the desired link above.

#### Comments

As it was already vastly covered, testing is essential anywhere in our code. With React, it would not be any different. A huge part of basically any application nowadays is the *User experience*. Having a powerful way to test the entirety of user actions to make sure everything is working as expected brings confidence to deploy the application and to pin-point any error a new feature might cause.

###### Feedback

As always, any feedback or suggestion is welcomed.
