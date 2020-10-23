## 16.2 - React Redux

After we've learned about 'pure' redux, it's time to *connect* (pun intended ;) ) it with React.

Here we cover:

* Necessity of a **Provider**, surrounding every component that wants access to the store.

* Necessity of the *connect* way of exporting components that require access to the state, be it for reading it or alter it. The syntax goes like:

```js
export default connect(stateDeliver, propDispatcher)(Component);
```

Where `stateDeliver` receives the application state as parameter, and `propDispatcher` receives the `store.dispatch` function as a parameter, and should return an object containing the functions that will alter the state of the application. You should import the correct **actionFunction** to each correct action.

----

#### Exercises

On this lesson we have 3 exercises that complement each other. The instructions are as described on each exercise, but the idea is to create a React app with a Redux state on both 1 & 2, while combining them on the third to understand a store with multiple states and reducers.

* [Exercise 1](./exercise_1)
* [Exercise 2](./exercise_2)
* [Exercise 3](./exercise_3)

Honorable mention to the **folder organization** of exercise 3, a personal touch ;)

----

#### Comments

Controlling a global state is probably a necessity for every big React application. Be it with Redux or the Context API, understanding how to do it effectively will put you in a higher position compared to colegue developers.

Even if the syntax seems 'too much' at first, after you get used to it and create a nice way to divide your project folders (specially the Redux one), you'll start to see the benefits of it. If you need any organization inspiration, check out [Exercise 3](./exercise_3).

###### Feedback

As always, any feedback or suggestion is welcomed.
