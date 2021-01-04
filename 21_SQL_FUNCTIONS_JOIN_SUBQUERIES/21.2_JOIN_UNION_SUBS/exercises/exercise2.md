# Exercise 2 - OUTER JOIN

As seen [here](https://sqlbolt.com/lesson/select_queries_with_outer_joins)

*Note: only the LEFT JOIN is supported in this exercise*

1. Find the list of all buildings that have employees

```SQL
SELECT DISTINCT b.building_name
FROM employees as e
  LEFT JOIN buildings as b
  ON b.building_name = e.building;
```

2. Find the list of all buildings and their capacity


```SQL
SELECT b.building_name, COUNT(e.building) as current_capacity, b.capacity
FROM buildings as b
  LEFT JOIN employees as e
  ON b.building_name = e.building
GROUP BY b.building_name;
```

3. List all buildings and the distinct employee roles in each building (including empty buildings)

```SQL
SELECT DISTINCT b.building_name, e.role
FROM buildings as b
  LEFT JOIN employees as e
  ON b.building_name = e.building;
```
