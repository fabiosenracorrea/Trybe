# 22.1 - SQL: TRANSFORMING IDEAS INTO DATABASES

Now that we've seen most of SQL query possibilities and functions, it's time to tacle on a different problem. How would we set up a proper database, with data relations and separation of concerns?

To understand how to build a proper database, first we need to dive in the concept of **Entities, Attributes and Relations**:

#### Entities

Basically a representation of something of the real world. What that thing will be when transformed into a *table*.

#### Attributes

Every characteristic we want to describe of our entity. Basically, our *table columns*.

#### Relations

How does one table relates to the other?

1. **One to One (1:1)**: 1 column on table A is connected with 1 column on table B

2. **One to Many (1:N)**: 1 column on table A is connected with N columns on table B

3. **Many to Many (N:N)**: N columns on table A is connected with N columns on table B. Generally these 2 tables are linked with a third middleware table, that has a *One to Many* relation with both tables.

### Drawing our schema

Now that we understand how to translate things into a database, it's time to model it. There are [plenty](https://www.holistics.io/blog/top-5-free-database-diagram-design-tools/) of tools available online to draw these diagrams. Make sure you put in enough detail of columns to describe your schema accurately.

### Creating our database

It's time to actually create our database. For that, we can use a set of commands:

```SQL
  CREATE DATABASE IF NOT EXISTS database_name;

  USE database_name; -- to make sure you are working with it from now on
```

And, before working with tables, we need to know what **data types** we have available on MySQL:

2. BOOLEANS

- **BOOL** - Different than Postgresql, here the only boolean type supports only the values 0 (false) and 1 (true), with no corresponding type for the usual `true/false` wordy type;


2. CHARACTERS

- **FIXED SIZE**
	- CHAR(n)
- **VARIABLE SIZE**
	- VARCHAR(n)

3. NUMBERS

- **INTEGERS**
	- TINYINT
	- SMALINT
	- MEDIUMINT
	- INT
	- BIGINT

- **DECIMAL PRECISION**
	- DECIMAL(size, n)
	- FLOAT/REAL
	- DOUBLE

4. TIME

- **DATE**
- **TIME**
- **DATETIME**
- **TIMESTAMP**
- **YEAR**

With data types, the only thing left to learn before actually creating our table is the available **constraints** - which are rules that restrict what can and can't be inserted on the constrained column

#### Constraints

- NOT NULL
- UNIQUE
- PRIMARY KEY
- FOREIGN KEY
- DEFAULT + default_value
- CHECK - forces a condition to be met on the specific column

### Creating a table

```SQL
  CREATE TABLE tableName (
    id_column INT PRIMARY KEY auto_increment,
    email VARCHAR(255) NOT NULL,
    userName VARCHAR(100) UNIQUE,
    created_at DATETIME DEFAULT NOW(),
    ...
  ) ENGINE InnoDB
```

*Note: MySQL has different engines for creating tables. Read more about it [here](https://dev.mysql.com/doc/refman/8.0/en/storage-engines.html).*

## Exercises

On this module we have 3 batches of exercises. 2 Quizzes and 1 database modeling exercise. You can check them out below:

[Quiz 1](https://www.sanfoundry.com/sql-mcqs-mysql-datatypes-1/)
[Quiz 2](https://www.sanfoundry.com/sql-mcqs-mysql-datatypes-2/)
[Exercise 1](./exercises/exercise1.md)

----

#### Comments

Database modeling is crucial for anyone starting a new business or in need of a change on an existing one. Understanding how to properly model 'real world stuff' into correctly related databases is harder than it looks, especially because, most of the time **the will be more than one way of solving your problem**. So if you are working with a team, sit down and decide the best relations and structures for you before creating tables and schemas.

###### Feedback

As always, any feedback or suggestion is welcomed.

