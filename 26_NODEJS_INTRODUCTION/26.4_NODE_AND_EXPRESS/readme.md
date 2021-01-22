# 26.4 - HTTP & EXPRESS W/ NODE

Now that we have covered a little about the basics of [NodeJs](https://nodejs.org/en/) it's time to dig deeper and understand how HTTP works and how to interpret request on a node application using [Express](https://expressjs.com/)

## HTTP

HTTP is a protocol for data transfer over the internet. Computers that want to exchange content over HTTP need to stablish a TCP connection to exchange request/responses. If a secure connection is required, when connection over TCP said computers do what we call a [TLS/SSL handshake](https://www.ssl.com/article/ssl-tls-handshake-overview/#:~:text=different%20security%20parameters-,What%20Is%20an%20SSL%2FTLS%20Handshake%3F,the%20details%20of%20their%20connection.) and exchange keys to encrypt and de-crypt all the data transferred between them.

HTTP has several methods of data request/transfer, but the most common are:

* GET
* POST
* PUT
* PATCH
* DELETE

## Express

Express is an un-opinionated framework that abstracts away most of http configuration required to be done with Node to allow your program/server to handle http requests.

To add it to an existing node project, just do `yarn add express` or `npm install express`.

### Basic usage

A working server can be created just by the following code:

```javascript
import express from 'express';

const server = express();

server.get('/', (request, response) => {
  return response.status(200).json({ response: 'ok' });
});

server.listen(3333, () => console.log('Server Started'));
```

The code above will run at your `localhost:3333` and, if a request to that port comes (curl it!), your server will answer with the json inside the response.

```bash
# on one window
node server.js

# on another window
curl http://localhost:3333/
```

Check out what will be your response ;)

### Middlewares

Middlewares are intermediate functions that process a request and may or may not allow that request continue down the application. It's basic structure is the same as the function express routes use.

One example would be an authentication middleware, that checks if the request has the correct authentication and, if it doesn't, responds to the request with an error.

```javascript
export default function authMiddleware(request, response, next) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT token is missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    verifyBearerToken(token)

    return next();
  } catch {
    throw new AppError('Invalid JWT Token', 401);
  }
}
```

The code above can be put before any other route to make sure requests only get to said routes if the user is authenticated.

```javascript
import authMiddleware from '../middlewares/auth.js';

server.use(authMiddleware);
```

### Router

To make sure your main **server.js** file is clean and not filled with routes, express provider use with a **Router**: a way of centralizing routes to handle to our application

```javascript
// on a separate file
import { Router } from 'express';

const appRoutes = Router();

appRoutes.get('/', (request, response) => {});
appRoutes.get('/otherRoute', (request, response) => {});
appRoutes.post('/AnotehrRoute', (request, response) => {});

export default appRoutes;

// on the server.js file
import appRoutes from '../routes';

// ...
server.use(authMiddleware);
server.use(appRoutes);
// ...
```

### Handling Errors

We can pass in a middleware after all the routes to handle our app errors accordingly. The difference of this type of middleware is that it receives **4 parameters** instead of 3. Check it out:

```javascript
// ...all the rest of our server.js code

server.use((error, request, response, next) => {
  return response.status(500).json({ error: "Internal Server Error" });
})

server.listen(3333);
```

This will make sure that, whatever throws inside out app is properly handled and whoever requested the information knows something went wrong.

## Exercises

On this module we have 1 batches of exercises. You can check them out below:

* [Express Exercise](./exercises)

----

#### Comments

Express is one of the most popular NodeJS frameworks out there. And it may as well be because of how easy it is to use. With just what's covered on this file you can create your very own server that returns to requests accordingly!

Obviously there's a lot more to learn, and organizing well your server code to make sure it's future-proof is harder than making it functional.

On future modules more will be covered on that.

###### Feedback

As always, any feedback or suggestion is welcomed.

