# 27.1 - SOFTWARE ARCHITECTURE AND MODEL CONCEPT

When it comes to designing your application logic, there are certain patterns you want to follow. Surely you can create your own, but the chances of that now following basic concepts of modern software architecture are high. As such, it is advised to study and follow one of the established architectures. In this module, we'll check out the MSC (Model, Service & Controller).

## Model

In the MSC architecture, the Model layer is responsible for abstracting all the connections and methods of direct interaction with the application's data (database, external apis, disk files...), exposing only the methods of interest (e.g. a method to get all users or find one in specific)

As such, our entire application doesn't know, for example, which database we are using (MySQL or MongoDB, for instance). This abstraction, or **separation of concerns** creates an application that's more easily repairable. If we were to replace MySQL for MongoDB, for instance, we wouldn't need to change anything apart from the model implementation. Every other code and function call would remain the same.

### Creating a simple model with MySQL's driver

Below a simple example of how one would create a model to use on a NodeJS application.

1. Instal MySQL's driver

```bash
npm instal mysql2
```

2. Create a `databaseConnection.js`

```javascript
import mysql from 'mysql2/promise';

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  database: 'your_database', // connect to the database you want
});

export default connection;
```

Let's say we are connecting to a database of books, and the first model we want to create needs to deal with the **authors** table we have in our database.

3. Create your model to expose only wanted methods to your application

```javascript
import connection from './databaseConnection.js';

function serializeAuthorData(authorData) {
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name,
  }
};

function addFullName(authorData) {
  const { id, firstName, middleName, lastName } = authorData;

  const actorFullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
  };
};

class Author {
  async getAll() {
    const [authors] = await connection.execute(
      'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
    );

    const authorsData =  authors.map(serializeAuthorData).map(addFullName);

    return authorData;
  }
}

export default Author;
```

With this simple execution, one doesn't even need to instantiate the model to use it's methods. This implementation can be largely improved with the usage of Dependency Injection, Repositories and more. But will suffice for now.

4. Whenever you need a list of your authors, just call the method!

```javascript
// ...
import Author from '../models/author.js';

// ...

server.get('/authors', async (request, response) => {
  const authors = await Author.getAll();

  return response.status(200).json({ authors })
});

// ...
```

### Creating the same interaction but with MongoDB's driver

Revising steps 1-3 using MongoDB's driver instead

1. Instal MongoDB's driver

```bash
npm instal mongodb
```

2. Create a `databaseConnection.js`

```javascript
import { MongoClient } from 'mongodb';

const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';

const connection = () => {
  return MongoClient
    .connect(MONGO_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((conn) => conn.db('your_database')) // database we want
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
};

export default connection;
```
3. Create your model to expose only wanted methods to your application

```javascript
import connection from './databaseConnection.js';

function addFullName(authorData) {
  const { id, firstName, middleName, lastName } = authorData;

  const actorFullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
  };
};

class Author {
  async getAll() {
    return connection()
      .then((db) => db.collection('authors').find().toArray())
      .then((authors) => authors.map(
        ({ _id, firstName, middleName, lastName }) => addFullName({
            id: _id,
            firstName,
            middleName,
            lastName,
        })
      );
  }
}

export default Author;
```

## Exercises

On this module we have 1 batches of exercises. You can check them out below:

* [Express Exercise](./exercises)

----

#### Comments



###### Feedback

As always, any feedback or suggestion is welcomed.

