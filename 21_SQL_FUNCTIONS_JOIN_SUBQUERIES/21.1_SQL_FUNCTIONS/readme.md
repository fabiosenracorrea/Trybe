# 21.1 - SQL FUNCTIONS

It's time to step up the game a little bit! Here we'll check out most of the common functions we have on SQL for strings, dates and numbers. To top it off, we'll check out how to make conditions (IF/CASE).

They are, in sort:

## STRING FUNCTIONS

* UCASE
* LCASE
* REPLACE
* RIGHT
* LEFT
* SUBSTRING
* LPAD
* BINARY (keyword for strict equality)
* INSTR (find the index of a char!)

## NUMBER FUNCTIONS/OPERANDS

* Regular operands (+ - * /)
* DIV
* MOD
* ROUND
* CEIL
* FLOOR
* POW
* SQRT
* RAND
* AVG
* SUM
* MAX
* MIN
* COUNT

## DATE FUNCTIONS

* CURRENT_DATE
* NOW
* DATEDIFF
* TIMEDIFF
* DATE, YEAR, MONTH
* HOUR, MINUTE, SECOND

## CONDITIONALS

### IF

Better used on sort comparisons needed. Here's the syntax with an example:

```SQL
SELECT IF(age > 18, 'CAN DRINK', 'CANT DRINK') AS can_drink FROM people;
```

A rather simple example, but there's the idea, a straight forward if/else

### CASE

Recommended when the alternatives are multiple. As:

```SQL
SELECT
  name,
  level,
  CASE
    WHEN level < 2 THEN 'Rookie'
    WHEN level >= 2 AND level <= 5 THEN 'Normal'
    WHEN level > 5 AND level < 10 THEN 'Pro'
    ELSE 'Ultra'
  END AS level_class
FROM players;
```

Now here a simple if would have been harder to code and to read. Using case we see perfectly fine what's supposed to happen.


## Exercises

On this module we have 3 batches of exercises. You can access each one of them below:

[Exercise 1](./exercises/exercise1.md)
[Exercise 2](./exercises/exercise2.md)
[Exercise 3](./exercises/exercise3.md)

----

#### Comments

A great part of good data analysis and manipulation is knowing what to use to do it. Functions are part of the tools required for that, so knowing what they are and how they work is mandatory.

###### Feedback

As always, any feedback or suggestion is welcomed.

