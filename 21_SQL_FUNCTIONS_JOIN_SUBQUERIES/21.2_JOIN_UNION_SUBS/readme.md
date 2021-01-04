# 21.2 - JOIN, UNION & SUB-QUERIES

Working with different tables that have some relation between them requires special attention.

These relations could be directly continuation of each other (e.g. a table with customers user data plus one with their addresses) or not. But at the end of the line you will need to draw conclusions and mesh data to create reports with these relations. In order to better combine and visualize them, we have a series of commands:

* JOIN
* UNION
* Sub-Queries

### JOIN

This could be easily visualized as to "glueing two or more tables sid-by-side". The are a couple of these, but here we will focus on:

1. LEFT JOIN
2. RIGHT JOIN
3. SELF JOIN

### UNION

If a `JOIN` can be visualized as to glueing tables side-by-side, a `UNION` can be represented by glueing one table at the end of the other one. "Extending one table with another". On this kind, we have

* UNION
* UNION ALL

With a slight difference that `UNION` automatically gets rid of duplicate rows, while `UNION ALL` does not.

### SUB-QUERIES

This appeared on prior modules, but is such an important part of the SQL world that it earns it's mention.

A sub-query is nothing more than a query that is used inside another query.

Take this example as clarification:

```sql
SELECT
	e.Name,
  e.LastName,
  d.Name as Department,
  d.Budget as DepartmentBudget
FROM
	Employees as e
  LEFT JOIN Departments as d
  ON e.Department = d.Code
WHERE d.Budget > (
	SELECT AVG(Budget)
  FROM Departments
);
```

Here we used a query to find exactly how much we wanted to compare budgets against.

## Exercises

On this module we have 6 batches of exercises. You can access each one of them below:

[Exercise 1](./exercises/exercise1.md)
[Exercise 2](./exercises/exercise2.md)
[Exercise 3](./exercises/exercise3.md)
[Exercise 4](./exercises/exercise4.md)
[Exercise 5](./exercises/exercise5.md)
[Exercise 6](./exercises/exercise6.md)

----

#### Comments

Because of how we store our data in SQL-databases nowadays, the probability that you'll work with more than one table is absurdly high (probably 100%), so it's pretty much mandatory to have excellence on JOIN/UNION/SUB-QUERIES knowledge. This module brings a slight introduction to each and every concept, as it will be covered in later modules.

###### Feedback

As always, any feedback or suggestion is welcomed.

