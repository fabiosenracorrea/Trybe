# 26.3 - NODEJS ARCHITECTURE

On this module, it will be covered the basic NodeJS architecture. Which is divided in 3 parts:

* Call Stack
* Event Loop
* V8

## Call Stack

Functions as a **LAST IN FIRST OUT** model, where a function call only leaver the stack once everything it call has been properly executed and itself has left the stack. Once the stack is cleared of a function call, the next call on the script goes in and it's handled the same way;

## Event Loop

To better understand the event loop, we first need to understand what a **task queue** is.

### Task Queue

As a proper **Queue** here the model is **FIRST IN FIRST OUT**. Code gets put on the Task Queue by the **VENDORS APIS**. They are special processors that deal with certain parts of javascript code. For example: in the browser, when we call *setTimeout* - the call to that enters the call stack normally, but, as it should be handled by the **Web APIs**, it leaves the stack to it, where it is properly *waited*. Once the time finishes, the Web API puts the function that should be executed onto the **Task Queue**

### Event Loop

It's responsible for picking up code that should be run from the **Task Queue** and putting it on the call stack.

### Promise Micro Queue

When they were introduced, Promises came with a bonus: An own *Queue* just for them. And this queue has preference over the normal task queue. This can be observed by the following code:

```javascript
setTimeout(() => { console.log('setTimeout') }, 0)
Promise.resolve().then(() => console.log('Promise'))
```

And we can see console will print "Promise" first!

## V8

It's the engine that actually executes our JS code. It's in it that we have the call stack and the task queue.


## Exercises

This is more of a conceptual module.

#### Comments

Understanding how JS+Node works under the hood is awesome. If you are just starting on JS it may seem not as important as studying regular syntax, but as time goes on optimizing your code knowing how everything works accelerate how well it will perform.

###### Feedback

As always, any feedback or suggestion is welcomed.

