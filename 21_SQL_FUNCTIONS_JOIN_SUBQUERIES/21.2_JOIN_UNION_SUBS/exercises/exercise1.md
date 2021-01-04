# Exercise 1 - INNER JOIN

As seen [here](https://sqlbolt.com/lesson/select_queries_with_joins)

1. Find the domestic and international sales for each movie

```SQL
SELECT m.title, bo.domestic_sales, bo.international_sales
FROM movies as m
INNER JOIN boxoffice as bo
WHERE m.id = bo.movie_id;
```

2. Show the sales numbers for each movie that did better internationally rather than domestically


```SQL
  SELECT m.title, bo.international_sales, bo.domestic_sales
  FROM movies as m
  INNER JOIN boxoffice as bo
  WHERE m.id = bo.movie_id AND bo.international_sales > bo.domestic_sales;
```

3. List all the movies by their ratings in descending order

```SQL
  SELECT m.title, bo.rating
  FROM movies as m
  INNER JOIN boxoffice as bo
  WHERE m.id = bo.movie_id
  ORDER BY bo.rating DESC;
```
