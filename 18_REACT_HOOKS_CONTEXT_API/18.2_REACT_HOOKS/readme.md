## 18.2 React Hooks

On this lesson, we start to learn about the **React Hooks**, and how to utilize them in *functional components*

Here we cover

1. **useState**

Basic structure:

```js
import React, { useState } from 'react';

function SomeComponent() {
  const [someState, setSomeState] = useState(initialStateValue);

  return (
    <p>
      { someState }
    </p>
  );
}
```

When using the *useState* hook, you can pass it an initial value for the state you are creating, and it returns **an array** in which the first index is a variable holding that initial value, and the second is a function that should be called when you want to *alter* that state. Remember, we **do not update states directly on React**.

You can also pass in a function to the **useState** hook to let it define the initial value:

```js
const [userRankings, setUserRankings] = useState(() => {
  const existingRanking = JSON.parse(localStorage.getItem('token')) || [];

  return existingRanking;
});
```

2. **useContext**

Basically to be used in conjunction with **createContext** to be able to extract the *value* provided from the context.Provider. Basically:

```js
import { useContext } from 'react';
import someContext from '../your/path';

const contextValue = useContext(someContext);

```

This, in conjunction with **useState**, allow us to better access the values from our contexts inside our components. Combining them:

Let's say we have a simple game and want to control the userScore with the Context API. We can do that by:

* Creating the context and it's provider

```js
import React, { createContext, useState } from 'react';

export const userScoreContext = createContext();

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
  )
}

```

Pay attention that we are passing in *an object* as our value, containing both our state and function to alter it based on our game's rules.

* Using **useContext** in the desired component

```js
import React, { useContext } from 'react';
import { userScoreContext } from '../our/context/path';

function Header() {
  const { userScore } = useContext(userScoreContext);

  return (
    <header>
      <span>
        Current Score: { userScore }
      </span>
    </header>
  );
}
```

And done! You now have access to your context. **Just remember that our Header component needs to be descendant (directly or indirectly) from our _UserScoreProvider_, or we wont be able to access the context**

Pretty similarly, we can access our function to change the score on another component. That change will reflect on our Header, which will automatically receive the updated value to display it correctly;

> If you are thinking we can better design this structure of context... we can! Creating **custom** hooks is yet another better way of accessing our context. More on that on [18.3 - Use Effect & Customized Hooks](../18.3_USE_EFFECT_CUSTOMIZED_HOOKS). If you want an spoiler, check out the structure on any exercise below ;)

----

#### Exercises

Because this matter is basically always associated with the previous topic, the exercise here is to apply these concepts on the exercises done previously. Check it out!

* [Exercise 1](../18.1_CONTEXT_API/exercise_1)
* [Exercise 2](../18.1_CONTEXT_API/exercise_2)
* [Exercise 3](../18.1_CONTEXT_API/exercise_3)

----

#### Comments

React Hooks is a HUGE improvements to our functional components. It completed changed how we can interact with React and more easily build complex components.

Because it's a relatively new feature, there's a lot of 'legacy' react code out there that still uses classes to manage component-state and lifecycle, so make sure you also know how to deal with that.

###### Feedback

As always, any feedback or suggestion is welcomed.
