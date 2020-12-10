# EXERCISES

**Exercício 1:** Faça os exercícios de 1 a 3 deste [link](https://www.w3schools.com/sql/exercise.asp?filename=exercise_select1)

1. `SELECT * FROM Customers;`

2. `SELECT City FROM Customers;`

3. `SELECT DISTINCT Country FROM Customers;`

**Exercício 2:** Faça os exercícios de 1 a 3 deste [link](https://www.w3schools.com/sql/exercise.asp?filename=exercise_orderby1)

1. `SELECT * FROM Customers ORDER BY City;`

2. `SELECT * FROM Customers ORDER BY City DESC;`

3. `SELECT * FROM Customers ORDER BY Country, City DESC;`

**Exercício 3:** Faça a página 1 deste [link](https://sqlbolt.com/lesson/select_queries_introduction)

1. `SELECT Title FROM movies;`

2. `SELECT Director FROM movies;`

3. `SELECT Title, Director FROM movies;`

4. `SELECT Title, Year FROM movies;`

5. `SELECT * FROM movies;`

**Exercício 4:** Faça os exercícios deste [link](https://sqlzoo.net/wiki/SELECT_basics)

1.
```SQL
SELECT population FROM world
  WHERE name = 'Germany';
```

2.
```SQL
SELECT name, population FROM world
  WHERE name IN ('Sweden', 'Norway', 'Denmark');
```

3.
```SQL
SELECT name, area FROM world
  WHERE area BETWEEN 200000 AND 250000;
```
