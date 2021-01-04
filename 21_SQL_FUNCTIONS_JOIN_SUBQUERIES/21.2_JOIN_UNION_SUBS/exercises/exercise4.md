# Exercise 4 - More Joins

As seen [here](https://github.com/XD-DENG/SQL-exercise/tree/master/SQL_exercise_02)

*Note: referenced exercises are 2.10-2.14*

1. Select all the data of employees, including each employee's department's data.


```SQL
SELECT *
FROM
	Employees as e
  LEFT JOIN Departments as d
  ON e.Department = d.Code;
```

2. Select the name and last name of each employee, along with the name and budget of the employee's department.


```SQL
SELECT
	e.Name,
  e.LastName,
  d.Name as Department,
  d.Budget as DepartmentBudget
FROM
	Employees as e
  LEFT JOIN Departments as d
  ON e.Department = d.Code;
```

3. Select the name and last name of employees working for departments with a budget greater than $60,000.

```SQL
SELECT
	e.Name,
  e.LastName,
  d.Name as Department,
  d.Budget as DepartmentBudget
FROM
	Employees as e
  LEFT JOIN Departments as d
  ON e.Department = d.Code
WHERE d.Budget > 60000;
```

4. Select the departments with a budget larger than the average budget of all the departments.

```SQL
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

5. Select the names of departments with more than two employees.

```SQL
SELECT
  d.Name as Department,
  COUNT(e.Name) as number_of_employees
FROM
	Employees as e
  LEFT JOIN Departments as d
  ON e.Department = d.Code
GROUP BY d.Name;
```
