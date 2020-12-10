# Exercise 2

From [here](https://sqlzoo.net/wiki/SELECT_from_WORLD_Tutorial)

1. Show the name and population for France, Germany, Italy

```SQL
SELECT name, population FROM world WHERE name IN ('France', 'Germany', 'Italy');
```

2. Show the countries which have a name that includes the word 'United'

```SQL
SELECT name FROM world WHERE name LIKE '%United%';
```

3. Two ways to be big: A country is big if it has an area of more than 3 million sq km or it has a population of more than 250 million.

Show the countries that are big by area or big by population. Show name, population and area.

```SQL
SELECT name, population, area FROM world WHERE population > 250000000 OR area > 3000000;
```

4. Exclusive OR (XOR). Show the countries that are big by area (more than 3 million) or big by population (more than 250 million) but not both. Show name, population and area.

```SQL
SELECT name, population, area FROM world WHERE population > 250000000 XOR area > 3000000;
```

5. For South America show population in millions and GDP in billions both to 2 decimal places.

```SQL
SELECT name, ROUND(population/1000000, 2), ROUND(gdp/1000000000, 2)
FROM world
WHERE continent = 'South America';
```

6. Show the name and capital where the name and the capital have the same number of characters.

```SQL
SELECT name, capital
FROM world
WHERE LENGTH(name) = LENGTH(capital);
```

7. Show the name and the capital where the first letters of each match. Don't include countries where the name and the capital are the same word.

```SQL
SELECT name, capital
FROM world
WHERE LEFT(name, 1) = LEFT(capital, 1) AND name <> capital;
```

8. Find the country that has all the vowels and no spaces in its name.

```SQL
SELECT name
FROM world
WHERE name LIKE '%a%' AND name LIKE '%e%' AND name LIKE '%i%' AND name LIKE '%o%' AND name LIKE '%u%' AND name NOT LIKE '% %';
```

