## 16.4 - Asynchronous Redux - Thunk

A Javascript library would be nothing if it couldn't handle async code. Most applications we'd want to use Redux on to manage the global state have some sort of async interaction. As such, it becomes inevitable the need of a way to make Redux understand async action calls.

That's why we have [Thunk](https://github.com/reduxjs/redux-thunk), a 14-line library that provides a **middleware** to understand action calls that do more than just return a plain static action-object.

On this module, we cover Thunk usage to create applications that, upon just sending an action call to the store (just like before), have an entire async-logic done for them in the background, so the component only has to worry about asking for the correct data and our redux logic earns the duty of requesting an API, triggering the correct actions and, finally, delivering the updated state with the info (or error) of what it was asked.

----

#### Exercises

We have 3 exercises on this lesson, each covered on it's own directory. You can navigate through them below:

1. [Vanilla JS Async Redux Login](./exercise_1)
2. [ReactJS Redux app w/ Async Redux](./exercise_2)
3. [(BONUS) Reddit viewer controlled with Async Redux](./reddit-app)

----

#### Comments

Redux isn't the easiest library to set up and start using it. There's several steps we have to master before "printing our hello-world". Redux-Thunk adds a level to this difficulty spike, but after understanding how to set up everything properly, things start to ease on you.

###### Feedback

As always, any feedback or suggestion is welcomed.
