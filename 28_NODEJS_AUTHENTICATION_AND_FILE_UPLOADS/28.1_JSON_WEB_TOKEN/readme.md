# 28.1 - NODEJS: AUTHENTICATION WITH JSON WEB TOKEN

There are plenty of ways of ensuring a user is logged in before accessing sensitive data on modern apis. One could use cookies, but that is not exactly secure.

An alternative to that is using JSON Web Tokens: strings generated using a public key + private key combination. The ideia behind them is to store data on the user in those tokens, so we can verify it's identity when a request is made.

The most common way of sending a JWT token to the server is though the request's header:

```json
"Authorization": "BEARER your_token_here"
```

To generate a JWT, one could simply

1. add the module:

```bash
npm install jsonwebtoken
```

2. use it:

```javascript
const jwt = require('jsonwebtoken');

const secret = process.env.APP_SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const token = jwt.sign({ data: user }, secret, jwtConfig);
```

To generate your secret hash, one could go [here](http://www.md5.cz/);

To decode the token, all it's needed is the secret and the token itself:

```javascript
const decoded = jwt.verify(token, process.env.APP_SECRET);
```

In order to properly using the JWT, one can create a **middleware** to handle every request to a private route:

```javascript
import jwt from 'jsonwebtoken';

import AppError from '../errors/AppError.js';
import authConfig from '../config/auth.js';


function ensureAuth(request, response, next) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Not authorized', 403);
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = jwt.verify(token, authConfig.jwt.secret);

    const { data } = decoded;

    request.user = {
      id: data.id,
    };

    return next();
  } catch {
    throw new AppError('Invalid JWT Token', 401);
  }
}

export default ensureAuth;
```

Now you just gotta make sure to use it on every route that needs it:

```javascript
import express from 'express';

import UserController from '../controllers/UserController.js';
import SessionController from '../controllers/SessionController.js';

import ensureAuth from '../middlewares/auth.js';

const routes = express.Router();

const userController = new UserController();
const sessionController = new SessionController();

routes.post('/login', sessionController.create);

routes.get('/user', ensureAuth, userController.show);
routes.get('/user/:id', ensureAuth, userController.find);

routes.post('/user', userController.create);

routes.put('/user/:id', ensureAuth, userController.update);

routes.delete('/user/:id', ensureAuth, userController.delete);

export default routes;

```

This is a base use case of an application with a user profile.

## Exercises

On this module we have 1 batches of exercises. You can check them out below:

* [Express Exercise](./exercises)

----

#### Comments

If you are building an application that requires login and handle sensitive data, using and understanding JWT should be mandatory. Not only because it's practical and easy to use, but because it's also a trend in the market right now.

Knowing different ways of ensuring authentication and when to use each is also highly encouraged.

###### Feedback

As always, any feedback or suggestion is welcomed.

