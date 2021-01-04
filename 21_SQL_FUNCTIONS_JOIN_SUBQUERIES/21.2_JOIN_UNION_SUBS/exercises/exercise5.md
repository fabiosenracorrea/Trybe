# Exercise 5 - Even More Joins!

As seen [here](https://github.com/XD-DENG/SQL-exercise/tree/master/SQL_exercise_03)

*Note: referenced exercises are 3.7-3.10*

1. Select the code of each box, along with the name of the city the box is located in.

```SQL
SELECT
  b.Code,
  w.Location
FROM
  Boxes as b
  INNER JOIN Warehouses as w
  ON b.Warehouse = w.Code;
```

2. Select the warehouse codes, along with the number of boxes in each warehouse.

```SQL
SELECT
  w.Code,
  COUNT(b.Code) as BoxCount
FROM
	Boxes as b
  INNER JOIN Warehouses as w
  ON b.Warehouse = w.Code
GROUP BY (w.Code);
```

3. Select the codes of all warehouses that are saturated (a warehouse is saturated if the number of boxes in it is larger than the warehouse's capacity).

```SQL
SELECT
  w.Code,
  COUNT(b.Code) as BoxCount,
  w.Capacity
FROM
	Boxes as b
  INNER JOIN Warehouses as w
  ON b.Warehouse = w.Code
GROUP BY (w.Code)
HAVING COUNT(b.Code) > w.Capacity;
```

4. Select the codes of all the boxes located in Chicago.

```SQL
SELECT
	b.Code
FROM
	Boxes as b
  INNER JOIN Warehouses as w
  ON b.Warehouse = w.Code
WHERE w.Location = 'Chicago';
```
