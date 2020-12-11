# Exercise 2

As seen [here](https://www.w3resource.com/mysql-exercises/aggregate-function-exercises/)

1. Write a query to list the number of jobs available in the employees table.

Option 1: in quantity:

```SQL
SELECT COUNT(*) AS jobs_available FROM employees;
```

Option 2: in type:

```SQL
SELECT COUNT(DISTINCT JOB_ID) AS jobs_available FROM employees;
```

2. Write a query to get the total salaries payable to employees.

```SQL
SELECT SUM(SALARY) AS total_salary_expense FROM employees;
```

3. Write a query to get the minimum salary from employees table.

```SQL
SELECT MIN(SALARY) AS lowest_salary FROM employees;
```

4. Write a query to get the maximum salary of an employee working as a Programmer.

```SQL
SELECT MAX(SALARY) AS max_programming_salary
FROM employees
WHERE JOB_ID = 'IT_PROG';
```

5. Write a query to get the average salary and number of employees working the department 90.

```SQL
SELECT COUNT(*) AS employees, AVG(SALARY) AS avg_salary
FROM employees
WHERE DEPARTMENT_ID = 90;
```

6. Write a query to get the highest, lowest, sum, and average salary of all employees.

```SQL
SELECT SUM(SALARY) AS total_salary_expenses, AVG(SALARY) AS avg_salary, MAX(SALARY) AS highest_salary, MIN(SALARY) AS lowest_salary
FROM employees
WHERE DEPARTMENT_ID = 90;
```

7. Write a query to get the number of employees with the same job.

```SQL
SELECT JOB_ID, COUNT(*)
FROM employees
GROUP BY JOB_ID;
```

8. Write a query to get the difference between the highest and lowest salaries.

```SQL
SELECT MAX(SALARY) - MIN(SALARY) AS highest_salary_diff
FROM employees;
```

9. Write a query to find the manager ID and the salary of the lowest-paid employee for that manager.

```SQL
SELECT MANAGER_ID, MIN(SALARY)
FROM employees
GROUP BY MANAGER_ID;
```

10. Write a query to get the department ID and the total salary payable in each department.

```SQL
SELECT DEPARTMENT_ID, SUM(SALARY)
FROM employees
GROUP BY DEPARTMENT_ID;
```

11. Write a query to get the average salary for each job ID excluding programmer.

```SQL
SELECT JOB_ID, AVG(SALARY)
FROM employees
WHERE JOB_ID <> 'IT_PROG'
GROUP BY JOB_ID;
```

12. Write a query to get the total salary, maximum, minimum, average salary of employees (job ID wise), for department ID 90 only.

```SQL
SELECT AVG(SALARY), MAX(SALARY), MIN(SALARY), SUM(SALARY)
FROM employees
WHERE DEPARTMENT_ID = 90
GROUP BY JOB_ID;
```

13. Write a query to get the job ID and maximum salary of the employees where maximum salary is greater than or equal to $4000.

```SQL
SELECT JOB_ID, MAX(SALARY)
FROM employees
GROUP BY JOB_ID
HAVING MAX(SALARY) >= 4000
```

14. Write a query to get the average salary for all departments employing more than 10 employees.

```SQL
SELECT DEPARTMENT_ID, AVG(SALARY), COUNT(*)
FROM employees
GROUP BY DEPARTMENT_ID
HAVING COUNT(JOB_ID) >= 10
```


