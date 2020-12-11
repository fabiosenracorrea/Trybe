# EXERCISE 3

As seen [here](https://www.w3resource.com/mysql-exercises/string-exercises/)

1. Write a query to list the number of jobs available in the employees table.

```SQL
SELECT job_id, GROUP_CONCAT(employee_id, ' ')  'Employees ID'
FROM employees GROUP BY job_id;
```

2. Write a query to update the portion of the phone_number in the employees table, within the phone number the substring '124' will be replaced by '999'.

```SQL
UPDATE employees
SET phone_number = REPLACE(phone_number, '124', '999')
WHERE phone_number LIKE '%124%';
```

3. Write a query to get the details of the employees where the length of the first name greater than or equal to 8.

```SQL
SELECT *
FROM employees
WHERE LENGTH(FIRST_NAME) >= 8;
```

4. Write a query to display leading zeros before maximum and minimum salary.

```SQL
SELECT job_id,  LPAD( max_salary, 7, '0') ' Max Salary',
LPAD( min_salary, 7, '0') ' Min Salary'
FROM jobs;
```

5. Write a query to append '@example.com' to email field.

```SQL
UPDATE employees
SET EMAIL = concat(EMAIL, '@example.com');
```

6. Write a query to get the employee id, first name and hire month.

```SQL
SELECT EMPLOYEE_ID,  FIRST_NAME, MONTH(HIRE_DATE) AS HIRE_MONTH
FROM employees;
```

7. Write a query to get the employee id, email id (discard the last three characters).

```SQL
SELECT EMPLOYEE_ID,  LEFT(EMAIL, LENGTH(EMAIL) - 3) AS EMAIL_ID
FROM employees;
```

8. Write a query to find all employees where first names are in upper case.

```SQL
SELECT *
FROM employees;
WHERE UCASE(FIRST_NAME) = BINARY FIRST_NAME;
```

9. Write a query to extract the last 4 character of phone numbers.

```SQL
SELECT RIGHT(PHONE_NUMBER, 4) AS PHONE_LAST_4_DIGITS
FROM employees;
WHERE LENGTH(PHONE_NUMBER) > 0;
```

10. Write a query to display the first word from those job titles which contains more than one words.

```SQL
SELECT job_title, SUBSTR(job_title,1, INSTR(job_title, ' ')-1)
FROM jobs;
```
