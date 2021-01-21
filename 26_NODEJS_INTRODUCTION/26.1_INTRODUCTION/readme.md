# 26.1 - NODEJS - INTRODUCTION

NodeJS was build using Chrome's V8 to interpret javascript outside of the browser, where it was originally designed for it to be.

Because of a non-blocking performance, multiple requests can be made to the same server without having denial of service of big waiting times to process each request completely before going to the next one. This is something very attractive and that makes back-end servers cost-efficient when using node.

## Modules

On a javascript NodeJS, we can interact with 3 types of modules:

1. **Core Modules**: modules from NodeJS itself, like the **fs** module to manage the file system.
2. **Local Modules**: our own files we create and interact with.
3. **3rd party modules**: The ones we install from packages (like npm install x)

There's also worth mentioning there's 2 ways of exporting content from one file:

### ES6 modules

```javascript
function sum(a, b) {
  return a + b
}

export const SOMETHING = 'SOMETHING';

export default sum
```

Importing:

```javascript
import sum, { SOMETHING } from 'filePath.js';
```

### Regular JS modules

```javascript
function sum(a, b) {
  return a + b
}

const SOMETHING = 'SOMETHING';

module.exports = sum

// or

module.exports = {
  sum,
  something: SOMETHING
}
```

Importing:

```javascript
const someModule = require('filePath.js');

const six = someModule(2, 4) // if the first one

// or

const six = someModule.sum(2, 4) // if second way
```

## Exercises

No exercise on this module, as it's a basic introduction to NodeJS and how we can run JS code on our pcs.

----

#### Comments

NodeJS is a powerful tool that has gotten millions of adopters. Back-ends using node are straight forward to create and manage, which helped the framework sky rocket. More on that later.

###### Feedback

As always, any feedback or suggestion is welcomed.

