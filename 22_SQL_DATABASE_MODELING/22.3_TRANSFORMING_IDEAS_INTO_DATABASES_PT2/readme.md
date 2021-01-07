# 22.3 - SQL: TRANSFORMING IDEAS INTO DATABASES PART 2

As we continue to study how to properly set up and work with a good database, we need a few more tools when handling with speed.

With that in mind, on this lesson we briefly cover:

### Views

Temporary tables created from custom queries. We create them with this basic syntax:

```SQL
use your_database;

CREATE VIEW your_view AS (
  SELECT * FROM table -- can be any query you want
);
```

### Index

A way to speed up commonly used columns/queries. We can create INDEX on:

- PRIMARY KEY
- UNIQUE
- INDEX (numeric fields)
- FULLTEXT INDEX


### Table Altering

How to edit an existing table. Most operations can be done here, as a few examples:

- Add a new column

```SQL
ALTER TABLE noticia ADD COLUMN data_postagem date NOT NULL;
```

-  Modify an existing column property

```SQL
ALTER TABLE noticia MODIFY noticia_id BIGINT;
```

-  Add a constraint

```SQL
ALTER TABLE noticia MODIFY noticia_id BIGINT auto_increment;
```

- Alter column type or name

```SQL
ALTER TABLE noticia CHANGE historia conteudo_postagem VARCHAR(1000) NOT NULL;
```

-  Drop/Exclude a column

```SQL
ALTER TABLE noticia DROP COLUMN data_postagem;
```

- Add a column specifically after another

```SQL
ALTER TABLE noticia ADD COLUMN data_postagem DATETIME NOT NULL AFTER titulo;
```

## Exercises

On this module we have 2 batches of exercises.

You can check them out below:

[Exercise 1](./exercise/exercise1.md)
[Exercise 2](./exercise/exercise2.md)

----

#### Comments

Speed certainly plays a huge roll when dealing with sql databases. As such, mastering how to properly use a `table index` and which views to create on specific moments.

###### Feedback

As always, any feedback or suggestion is welcomed.

