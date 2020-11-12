## 18.1 React Context

To start of with the context API, this lesson covers the basics of how to create and use a context.

```js
import React, { createContext } from 'react';

const someContext = createContext();

function contextProvider({ children }) {
  return (
    <someContext.Provider value={ `something` }>
      { children }
    </someContext.Provider>
  );
}
```

With the simplification above, any Component that is descendant in any form (directly or indirectly) from the Provider will have access to it's value. We can access it via

```js
<someContext.Consumer>
  { (value) => (
    <div>
      { value }
    </div>
  ) }
</someContext.Consumer>
```

Or we can create a custom hook, like what you will see on the exercises below.

----

#### Exercises

On this lesson we will refactor 3 exercises from the [Redux](../../16_REDUX) module. Each original exercise is linked in the respective `readme.md` file.

* [Exercise 1](./exercise_1)
* [Exercise 2](./exercise_2)
* [Exercise 3](./exercise_3)

----

#### Comments

As mentioned before, during the Redux module, the Context API is relatively new to React. As such, it doesn't have a lot of space conquered. Nonetheless, i personally think using context + personal hooks is a lot better than using Redux. Especially when you centralize the logic on one file like i did on each 'hook' jsx file on the exercises above.

This doesn't render Redux useless, as it's still used quite a bit in today's market.

###### Feedback

As always, any feedback or suggestion is welcomed.
