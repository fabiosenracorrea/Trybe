# Exercise 6 - TITLE

As seen [here](https://github.com/XD-DENG/SQL-exercise/blob/master/SQL_exercise_04/4_build_schema.sql)

*Note: referenced exercises are 4.5-4.7*

1. Select all data from all movie theaters and, additionally, the data from the movie that is being shown in the theater (if one is being shown).

```SQL
SELECT
	*
FROM
	MovieTheaters as mt
  LEFT JOIN Movies as m
  ON mt.Movie = m.Code;
```

2. Select all data from all movies and, if that movie is being shown in a theater, show the data from the theater.


```SQL
SELECT
	m.Title,
  m.Rating,
  mt.Name as TheaterName
FROM
	Movies as m
  LEFT JOIN MovieTheaters as mt
  ON mt.Movie = m.Code;
```

OR

```SQL
SELECT
	m.Title,
  m.Rating,
  mt.Name as TheaterName
FROM
	MovieTheaters as mt
  RIGHT JOIN Movies as m
  ON mt.Movie = m.Code;
```

3. Show the titles of movies not currently being shown in any theaters.

```SQL
SELECT
	m.Title
FROM
	Movies as m
	LEFT JOIN MovieTheaters as mt
	ON mt.Movie = m.Code
WHERE mt.Movie IS NULL;
```
