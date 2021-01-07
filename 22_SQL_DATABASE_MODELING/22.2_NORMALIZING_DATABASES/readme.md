# 22.2 - SQL: NORMALIZING DATABASES, DUMPING

After understanding how to create databases out of ordinary stuff, there's a need to *normalize* it. And, as we design and fill our data in, it's interesting to know how to secure it as a backup - either just our structure or structure+data.

The intent of normalizing a database is to reduce, as much as possible, it's repeatable data. To do so, we follow 3 normalize rules:

### 1st rule

- Columns should contain only **one value**
- A column should only have **one data type**
- Each column should have an unique name
- The order of which data is inserted should not affect your data integrity.

### 2nd rule

- Adhere to the first rule
- A table should not have a *parcial dependency*. (i.e. a column that's only dependant on one other column, not the whole set of data)

### 3rd rule

- Adhere to the 1st and 2nd rules
- A table should not contain a column that's not directly dependant on it's primary key

### Dumping

Dumping is the process of getting our Schema/table/data and saving it as a backup. It's format can vary, but it's usually in the form of sql files.

This process can be done either via command line or GUIs like MySQL Workbench.

## Exercises

On this module we have 2 batches of exercises, focusing on converting tables using the rules presented above. Because it's a simple 'table conversion' exercise, we've used Excel (and similar programs) to focus on the important part.

You can check them out below:

[Exercise 1](./exercises/readme.md)
[Exercise 2](https://www.javaguicodexample.com/normalizationnotes.pdf)

----

#### Comments

It's worth nothing if you know hot to mechanically create and alter tables in SQL if you they end up redundant and filled with inconsistent data. Knowing how to properly create those tables not just with correct syntax and relations, but with actual data division is where the money is.

###### Feedback

As always, any feedback or suggestion is welcomed.

