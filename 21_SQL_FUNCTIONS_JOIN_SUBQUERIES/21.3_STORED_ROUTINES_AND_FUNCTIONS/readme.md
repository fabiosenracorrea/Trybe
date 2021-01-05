# 21.3 - STORED ROUTINES AND FUNCTIONS

On this module we'll check out Stored Procedures, Stored Functions and SQL Triggers.

## Routines & Automated tasks

On MySQL we have two ways of storing blocks of code for later use:

* Stored Procedures
* Stored Functions

While functions behave exactly like functions in any other language, procedures can be similar to whole scripts of actions. And as distinct as those things are, naturally, there seems to be a lot of confusion on whats possible to accomplish with each of them. Because of that, i wrote a simple comparison on 4 different topics:

#### 1. Return of a Value

* Stored Procedure: can, optionally, return a value
* Stored Function: needs to return a value

#### 2. IN/OUT Parameters

* Stored Procedure: can receive and return parameters
* Stored Function: supports only IN parameters

#### 3. PLACES OF USE

* Stored Procedure: **can't** be used inside queries
* Stored Function: can be used inside `SELECT`, `WHERE` or `HAVING` clauses

#### 4. INTERACTION BETWEEN THE TWO

* Stored Procedure: Can call functions
* Stored Function: **can't** call procedures

To sum up:

* Stored Procedures: called with the `CALL` keyword, returning optionally some value(s)
* Stored Function: called with the `SELECT` keyword, returning some value.

## Triggers

Triggers are another special type of scripting we have on MySQL. THey, as the name suggests, **trigger** either BEFORE or AFTER an SQL action. That action can be any of:

* INSERT
* UPDATE
* DELETE

So, basically, anytime you'll want to run some logic BEFORE/AFTER any database altering event, a `Trigger` is what you should use.

This special script has access to the OLD and NEW row values, depending on the action (obviously an INSERT doesn't have an old value, as a DELETE doesn't have a new one).

A really common way of using triggers is to update the updated_on column that is so common is most databases. Or to update a LOG TABLE with any change a table has suffered.

## Exercises

On this module we have only 1 exercise. You can check it out below:

[Exercise 1](./exercises/exercise1.md)

----

#### Comments

Don't Repeat Yourself. It doesn't matter which programming language you are using. If you have duplicate code or are doing duplicate tasks, almost every time you are doing it wrong. On SQL it would not be different.

Using Functions, Procedures and Triggers to improve daily tasks should be greatly incentivized.

###### Feedback

As always, any feedback or suggestion is welcomed.

