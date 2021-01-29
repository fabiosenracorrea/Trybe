# 31.2 - DATABASES AND ORM: OBJECT RELATIONAL MAPPING

Object Relacional Mapping is the process of generating and handling SQL code though objects in JS. That means you will no longer write queries like

```javascript
const [users] = await User.execute(`
  SELECT * FROM users
`)
```

And will, instead, let the abstraction of the ORM deal with that, like:

```javascript
const users = await User.listAll(); // query will be created by ORM
```

## Sequelize

The chosen ORM to cover on this module is [Sequelize](https://sequelize.org/), which covers Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.

### Usage

You first need to add your SQL's driver, sequelize itself and it's CLI to your project

```bash
npm install sequelize mysql2
```

and:

```bash
npm install sequelize-cli -D
```

After that, you need to init the CLI to generate the folders that sequelize will use to control the project and database.

```bash
npx sequelize-cli init
```

This will generate 4 folders on your main directory. If you want to customize where those folders will be generated and tell sequelize where to find it, you must create a `.sequelizerc` file that will look like this:

```javascript
const path = require('path');

module.exports = {
  'config': path.resolve('src', 'database', 'config', 'config.json'),
  'models-path': path.resolve('src', 'database', 'models'),
  'seeders-path': path.resolve('src', 'database', 'seeders'),
  'migrations-path': path.resolve('src', 'database', 'migrations')
}
```

The folders generated are:

* config
* models
* migrations
* seeders

Let's cover them explaining what they are:


### Config

This is where the configuration of connection with your database will be. It has several environment settings (development, test, production) and they all follow the same structure:

```json
"development": {
  "username": "root",
  "password": null,
  "database": "your_database",
  "host": "127.0.0.1",
  "dialect": "something"
},
```

just remember: **do not push this file into public version control hosters like github**. My suggestion is to create a `config.example.json` file that will have the exact structure as above, without any sensitive data. This will serve as a model to the developers that look at your project in need of how to configure it.

### Models

Where all the abstractions that represent tables will be. It's interesting to note that it generates an `index.js` file in this folder, which is the file you will import your models from. They are created on their own file, tho. Let's see an example:

You want to create a **User** model, so, after creating a `User.js` file, you would do something like:

```javascript
const User = (sequelize, DataTypes) => {
  const userModel = sequelize.define("User", {
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.NUMBER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    tableName: 'users',
  });

  return userModel;
};

module.exports = User;
```

There are a couple of key points here:

1. The name of the generated model, which you'll use to import on your application is the string you pass as first parameter on the **define** method.

2. Sequelize auto-detects this name and tries to infer the table name by using it in it's plural. So, without the property 'tableName' on the configuration object, it would try to find a table named `Users` in your database to link with that model.

After creating the model, you will import it from the index.js file:

```javascript
const { User } = require('../models');

// some controller
```

## Migrations

Migrations are the solution to **version control of databases**. Imagine you have a team of 4 devs working on the same project. What would happen if 2 of them decided to update a table? Without migration, both of them would perform the updates on their *local databases*, creating two different results.

With migrations, this can't happen because when you run them, your database is updated to it's last version with all the modifications made.

To generate a migration, one simply:

```bash
npx sequelize migration:generate --name create-users
```

This will create a file with the current timestamp in the format `yyyy-mm-dd-hh-mm-ss-create-users` without the hifens on the date. **DO NOT ALTER THIS NAME**. It is what's used by sequelize to know which migration to perform first.

The format of the file is pretty simple: It has two methods **up** and **down**. They should be coded as **complete opposites**. This means if the *up* method is used to *create a table*, the *down* will be used to *drop that same table*.

An example:

```javascript
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const UsersTable = queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fullName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
    });

    return UsersTable;

  },

  down: async (queryInterface) => queryInterface.dropTable("Users"),
};
```

## Seeders

Just like migrations, they are control versions of something of you database. Instead of tables, they control information of **actual data** of the tables.

Considering we have the migration above in our project, we could have a seeder like this:

```javascript
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Users",
      [
        {
          fullName: "Leonardo",
          email: "leo@test.com",
        },
        {
          fullName: "JEduardo",
          email: "edu@test.com",
        },
      ],
      {}
    ),

  down: async (queryInterface) => queryInterface.bulkDelete("Users", null, {}),
};
```

## Transactions

Transactions are way of guaranteeing that data will be preserved in our database only after every action of a certain list is completed correctly. Think about a money transfer between accounts: the database can only be really updated if the money removed from user A is added to user B. If anything goes wrong between those operations, everything should be reverted.

By default, sequelize doesn't enable transactions by default, but you can write code to use it. Read more on that [here](https://sequelize.org/master/class/lib/transaction.js~Transaction.html)

## Exercises

On this module we have 1 batch of exercises. You can check them out below:

* [Sequelize CRUD Server](./exercises)

----

#### Comments

Although it's great to learn how to perform raw queries, ORMs bring so much to the table that it is hard not to use them. While they are awesome, depending on how you implement your project in JS (considering dependency inversion and all) you might get lost without *type checking* the documentation to see the available methods you can use.

So, if you have any experience with it, i'd recommend using [Typescript](https://www.typescriptlang.org/) on projects with ORM connectivity. (Or really any other project ;) )

###### Feedback

As always, any feedback or suggestion is welcomed.

