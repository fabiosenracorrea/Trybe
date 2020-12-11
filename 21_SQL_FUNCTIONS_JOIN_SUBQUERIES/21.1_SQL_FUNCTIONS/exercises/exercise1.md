# Exercise 1 - Aggregates

As seen [here](https://sqlbolt.com/lesson/select_queries_with_aggregates)

1. Find the longest time that an employee has been at the studio

```SQL
SELECT MAX(Years_employed) FROM employees;
```

2. For each role, find the average number of years employed by employees in that role


```SQL
SELECT role, AVG(Years_employed)
FROM employees
GROUP BY role;
```

3. Find the total number of employee years worked in each building

```SQL
SELECT Building, SUM(Years_employed)
FROM employees
GROUP BY Building;
```

4. Find the number of Artists in the studio (without a HAVING clause)

```SQL
SELECT COUNT(*) FROM employees WHERE Role = 'Artist';
```

5. Find the number of Employees of each role in the studio

```SQL
SELECT Role, COUNT(*) as employee_count
FROM employees
GROUP BY Role;
```

6. Find the total number of years employed by all Engineers


```SQL
SELECT SUM(Years_employed) as engineer_working_years
FROM employees
WHERE Role = 'Engineer';
```
