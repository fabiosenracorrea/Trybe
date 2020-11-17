## 18.3 useEffect & Custom Hooks

Continuing the study on React Hooks, it's time to check out the **lifecycle** hook *useEffect* and how to create you own hooks!

1. **useEffect**

Basic structure:

```js
import React, { useEffect } from 'react';

function SomeComponent() {
  useEffect(() => {
    // something to run on render
  });

  return (
    <p>
      { someState }
    </p>
  );
}
```

When using the *useEffect* hook, you can use it as a way to run code each time your component renders. But be aware! This can cause an updated depth limit excess and/or cause a memory leak. Read more about this hook on the [official documentation](https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects) as it's an extensive knowledge that needs to be acquired before correctly using this hook. Pay close attention to the **optional** array you can pass in as a second argument to this hook.


2. **Custom Hooks**

Hooks are, in it's essence, just functions. And, because of that, we can wrap some, for example, useState and useEffect logic on a custom function we create, and simply call it inside our component to use it's power. For example, let's say you want to display a counter in your page, specifically counting every second. You could set this logic up with a **useState** and **useEffect** inside your component, as you normally would, but you can also create a custom **useCounter** hook:

```js
import React, { useState, useEffect } from 'react';

function useCounter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter(oldC => oldC + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return counter;
}

function YourComponent() {
  // some other logic

  const counter = useCounter();

  return (
    // ....
    <span>{counter}</span>
    // ....
  )
}

```

Aaaand, done! It works as intended and you cleaned your component up.

* **Custom Context Hooks**

If you recall from the [previous section](../18.2_REACT_HOOKS), we've used the *useContext* in a component we wanted to access one of our contexts. It works nice, but we can actually create a custom hook to wrap it even more nicely.

Recall that we had a context and it's provider. But now, instead of exporting out context and using it on each component we'd like, let's create a custom hook to call instead:

```js
import React, { createContext, useState, useContext } from 'react';

const userScoreContext = createContext();

export function UserScoreProvider({ children }) {
  const [userScore, setUserScore] = useState(0);

  function updateScore(level) {
    const updatedScore = userScore + 2 * level;

    setUserScore(updatedScore);
  }

  return (
    <userScoreContext.Provider value={{ userScore, updateScore }}>
      { children }
    </userScoreContext.Provider>
  );
}

export function useUserScore() {
  const context = useContext(userScoreContext);

  if (!context) {
    throw new Error('Dont forget to use this within the context provider');
  }

  return context;
}

```

And, just like that, we now have a custom hook to access our context from everywhere in our application, just by importing it!

PS: That Error is that to remind you that you can only access context from components that are descendant of that context's Provider.

----

#### Exercises

Because this matter is basically always associated with the previous topic, the exercise here is to apply these concepts on the exercises done previously. Check it out!

* [Exercise 1](./exercise_1)
* [Exercise 2](./exercise_2)

----

#### Comments

React Hooks is a HUGE improvements to our functional components. It completed changed how we can interact with React and more easily build complex components.

Particularly, i find the **useEffect** of of the hardest standard hooks to be used properly, because of it's power on acting as a blank card for every important *lifecycle* method we have. Provided that you know how to use it (and paired with custom hooks you might want to create), this can surely elevate your React skills to the next level.

Because it's a relatively new feature, there's a lot of 'legacy' react code out there that still uses classes to manage component-state and lifecycle, so make sure you also know how to deal with that.

###### Feedback

As always, any feedback or suggestion is welcomed.
