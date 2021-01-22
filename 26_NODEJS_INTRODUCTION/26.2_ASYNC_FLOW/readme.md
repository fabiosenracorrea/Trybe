# 26.2 - NODEJS: ASYNC FLOW

On this module, much of the content on Callbacks, Promises and async/await are revised, having a look at examples manipulating a text file.

Callbacks, Promises and Async/Await were first introduced [here](../../09_ASYNCHRONOUS_JAVASCRIPT)

## Reading a file using Node - Sync x Async

### Sync version

By simply doing:

```javascript
import fs from 'fs';

const data = fs.readFileSync('some_path.txt", 'utf8');

// more code that will run once reading is finished
```

you cant get the content of a file. This method throws ann error if it fails, so you better use a try/catch for that!

### Async Callback version

This method receives an extra parameter, a callback that will run after the file was read:

```javascript
const fs = require('fs');

const filePath = 'meu-arquivo.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('The was an error while reading the file');
    process.exit(1);
  }
  console.log(`File content: ${data}`);
});
```

### Async Promises version

Node also has versions of it's core modules using promises

```javascript
const fs = require('fs').promises;

const text = 'Some text';

function writingFiles() {
  fs.writeFile('./my-file.txt', text);
}

writingFiles();
```

## Exercises

Exercises on this module were to get used to Promises/callbacks usage, which i already know how to.

#### Comments

Dealing with async code on NodeJS is part of any server you may want to deploy or use. As such, understanding how to deal with it is very important.

###### Feedback

As always, any feedback or suggestion is welcomed.

